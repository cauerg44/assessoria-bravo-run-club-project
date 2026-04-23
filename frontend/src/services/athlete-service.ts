import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findAllMinByStatusAndGender(status: string, gender: string) {
  return axios.get(`${BASE_URL}/athletes?status=${status}&gender=${gender}`)
}