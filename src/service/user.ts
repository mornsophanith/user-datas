import axios from "axios";
import UserFill from "../types/usersFill";

const url = "https://api.github.com";
const PER_PAGE = 25;

export async function getMany(): Promise<UserFill[]> {
  try {
    const response = await axios.get<UserFill[]>(`${url}/users`, {
      params: {
        per_page: PER_PAGE
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getOne(userName: string): Promise<UserFill> {
  try {
    const response = await axios.get<UserFill>(`${url}/users/${userName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
