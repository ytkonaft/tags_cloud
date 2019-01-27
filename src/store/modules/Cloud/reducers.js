import { createReducer } from "store/utils";
import * as types from "./types";

const cloudInitState = {
  fetching: true,
  tags: {
    tagById: null,
    tagsOrder: null,
    maxScore: 0
  },
  error: null
};

const cloudReducer = createReducer(cloudInitState)({
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

export default cloudReducer;
