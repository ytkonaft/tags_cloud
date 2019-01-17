import { cloudFetch, setTags } from "./actions";
import FetchClient from "app/utils/FetchClient";
import IdsAndByIds from "app/utils/IdsAndByIds";

export const getTags = (postId, data) => async dispatch => {
  try {
    const { data } = await FetchClient.get(`/data`);
    dispatch(setTags(IdsAndByIds(data)));
    dispatch(cloudFetch(false));
  } catch (error) {
    console.log(error);
  }
};
