import axios, { AxiosError } from "axios"
import { GET_POSTS } from "../constants/urls"

export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string,
}

const generateSearchQuery = (userIds: number[]) => {
  console.log('generateSearchQuery', userIds)
  let searchQuery = '';
  if (userIds.length > 0) {
    searchQuery = `?&userId=${userIds.join('&userId=')}`
  }
  return searchQuery
}

export const getPosts = async (userIds: number[]): Promise<IPost[]> => {
  try {
    const searchQuery = generateSearchQuery(userIds);
    const response = await axios.get(`${GET_POSTS}${searchQuery}`);
    return response.data;
  } catch (e) {
    console.error((e as AxiosError).message)
    throw e;
  }
}