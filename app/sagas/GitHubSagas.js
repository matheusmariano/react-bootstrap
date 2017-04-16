import { call, put, takeLatest } from 'redux-saga/effects'
import GitHubActions from '../redux/GitHubRedux'

export function * githubGetRepos(http, { username }) {
  const response = yield call(http.githubGetRepos, username)

  if (response.ok) {
    yield put(GitHubActions.githubGetReposSuccess(response.data))
  } else {
    yield put(GitHubActions.githubGetReposFailure())
  }
}
