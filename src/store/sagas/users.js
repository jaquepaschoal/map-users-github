import api from "../../services/api";
import { call, put, select } from "redux-saga/effects";
import { Creators as UserActions } from "../ducks/users";

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.username}`);

    const userData = {
      id: data.id,
      username: data.login,
      named: data.name,
      image: data.avatar_url
    };

    yield put(UserActions.addUsersuccess(userData));
  } catch (err) {
    console.log(err);
    yield put(UserActions.addUserFailure("Erro ao adicionar repositório"));
  }
}
