import axios, { AxiosError } from "axios"
import { GET_USERS } from "../constants/urls"

interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string,
  }
}
interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string,
}
export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: ICompany,
}

export const getUsers = async () => {
  try {
    const response = await axios.get(GET_USERS);
    return response;
  } catch (e) {
    console.error((e as AxiosError).message)
  }
}