import { Request, Response, RequestHandler } from "express";

import { Video } from "../interfaces/video.interface";

import { createVideo } from "../services/video";

const getAllVideos = async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;
    // const response = await getAllVideos();
  } catch (e) {}
};

const createVideos = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const responseCreate = await createVideo(body);
    console.log(responseCreate);
    return res.send(responseCreate);
  } catch (error) {}
};

export { createVideos, getAllVideos };
