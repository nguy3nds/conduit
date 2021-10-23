import axios from "axios";
import { Data } from "../interfaces";

// export const URL = "http://localhost:3000";
export const URL = "https://api.realworld.io";

export const userByToken = (token: string | null) =>
  axios.get<Data>(`${URL}/api/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
