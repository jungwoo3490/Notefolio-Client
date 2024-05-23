import { api } from "../../libs/api";

export const postCreativeLike = async (creativeId: number) => {
  try {
    const response = await api.post(
      "/creatives/heart",
      { creativeId },
      {
        headers: {
          creatorId: 1,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to toggle heart.");
  }
};
