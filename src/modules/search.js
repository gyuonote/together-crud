import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [SEARCH_POSTS, SEARCH_POSTS_SUCCESS, SEARCH_POSTS_FAILURE] =
  createRequestActionTypes('posts/SEARCH_POSTS');

export const SearchPosts = createAction(
  SEARCH_POSTS,
  ({ content, option, page }) => ({ content, option, page }),
);

const SearchPostsSaga = createRequestSaga(SEARCH_POSTS, postsAPI.searchPosts);
export function* searchSaga() {
  yield takeLatest(SEARCH_POSTS, SearchPostsSaga);
}

const initialState = {
  search: null,
  error: null,
  lastPage: 1,
};

const search = handleActions(
  {
    [SEARCH_POSTS_SUCCESS]: (state, { payload: search, meta: response }) => ({
      ...state,
      search,
      lastPage: parseInt(response.headers['last-page'], 10),
    }),
    [SEARCH_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default search;
