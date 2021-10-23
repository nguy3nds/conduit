import { DataArticles, DataTags } from "./../../../../../interfaces/index";
import axios from "axios";
import { URL } from "../../../../../apis";

export const getTags = () => axios.get<DataTags>(`${URL}/api/tags`);

export const getArticleByTag = (tag: String, token: any) =>
  axios.get<DataArticles>(`${URL}/api/articles`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    params: {
      tag: tag,
    },
  });

export const getArticleByTagNoToken = (tag: String) =>
  axios.get<DataArticles>(`${URL}/api/articles`, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      tag: tag,
    },
  });
