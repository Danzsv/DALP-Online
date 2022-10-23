import { Router } from "express";

import { createVideos } from "../controllers/videos";

const router = Router();

router.post("/", createVideos);

export { router };
