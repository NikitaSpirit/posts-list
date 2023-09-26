import axios, { AxiosError } from "axios"
import { GET_POSTS } from "../constants/urls"

export interface IComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export const getCommentsByPostId = async (userId: number): Promise<IComment[]> => {
  try {
    const response = await axios.get(`${GET_POSTS}/${userId}/comments`);
    return response.data;
  } catch (e) {
    console.error((e as AxiosError).message)
    throw e;
  }
}