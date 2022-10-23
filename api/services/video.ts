import { Video } from "../interfaces/video.interface";

import { VideoModel } from "../models/Video";

const createVideo = async (video: Video) => {
  try {
    const responseCreate = await VideoModel.create(video);

    return responseCreate;
  } catch (error) {}
};

export { createVideo };
