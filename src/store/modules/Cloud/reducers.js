import { createReducer } from "store/utils";
import * as types from "./types";

const postInitState = {
  fetching: true,
  tags: {
    tagById: null,
    tagsOrder: null
  },
  error: null
};

const postReducer = createReducer(postInitState)({
  [types.FETCING_CLOUD]: (state, { payload }) => ({
    ...state,
    fetching: payload
  }),
  [types.SET_TAGS]: (state, { payload }) => ({
    ...state,
    tags: {
      ...payload
    }
  })
});

export default postReducer;
