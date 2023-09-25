import axios, { AxiosError } from "axios"
import { GET_POSTS } from "../constants/urls"

export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export const getPosts = async () => {
  try {
    const response = await axios.get(GET_POSTS);
    return response;
  } catch (e) {
    console.error((e as AxiosError).message)
  }
}