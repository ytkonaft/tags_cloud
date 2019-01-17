import * as types from "./types";

export const cloudFetch = value => ({
  type: types.FETCING_CLOUD,
  payload: value
});

export const setTags = ({ objById, arrayIds }) => ({
  type: types.SET_TAGS,
  payload: {
    tagById: objById,
    tagsOrder: arrayIds
  }
});
