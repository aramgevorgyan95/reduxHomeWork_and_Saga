import { call, put } from "redux-saga/effects";
import publicAPI from "../../services/api/publicAPI";
import { PeopleType } from "../types";

function* peoplesSaga() {
    const response = yield call(
        publicAPI.get('/users')
    );
    yield put({
        type: PeopleType.GET_PEOPLES_LIST,
        payload: response.data
    })
}

export default peoplesSaga;