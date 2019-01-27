import { cloudFetch, setTags } from "./actions";
import FetchClient from "app/utils/FetchClient";
import { tagsSelector } from "./selector";

export const getTags = () => async dispatch => {
  try {
    const { data } = await FetchClient.get(`/data`);
    dispatch(setTags(tagsSelector(data)));
    dispatch(cloudFetch(false));
  } catch (error) {
    console.error(error);
  }
};
