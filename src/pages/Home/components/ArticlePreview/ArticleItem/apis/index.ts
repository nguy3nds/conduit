import { DataArticle } from "./../../../../../../interfaces/index";
import axios from "axios";
import { Article } from "../../../../../../interfaces";
import { URL } from "../../../../../../apis";

export const postFavorite = (token: String | null, slug: String | undefined) =>
  axios.post<DataArticle>(
    `${URL}/api/articles/${slug}/favorite`,
    {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const deleteFavorite = (
  token: String | null,
  slug: String | undefined
) =>
  axios.delete<DataArticle>(`${URL}/api/articles/${slug}/favorite`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
