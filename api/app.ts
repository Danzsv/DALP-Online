import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "express";
import db from "./config/mongo";
import { router } from "./routes";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/", (req: Request, res: Response) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`READY IN PORT ${PORT}`));
db().then(() => console.log("SUCCESSFUL CONNECTION"));
