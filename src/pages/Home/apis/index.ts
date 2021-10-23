import axios from "axios";
import { URL } from "../../../apis";
import { LIMIT } from "../../../constant";
import { DataArticles } from "../../../interfaces";

export const yourArticles = (token: any, offset: number) =>
  axios.get<DataArticles>(
    `${URL}/api/articles/feed?limit=${LIMIT}&offset=${offset}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const globalArticles = (token: any, offset: number) =>
  axios.get<DataArticles>(
    `${URL}/api/articles?limit=${LIMIT}&offset=${offset}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const globalArticlesNoToken = (offset: number) =>
  axios.get<DataArticles>(
    `${URL}/api/articles?limit=${LIMIT}&offset=${offset}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
