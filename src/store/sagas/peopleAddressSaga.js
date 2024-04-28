import { call, put } from "redux-saga/effects"
import publicAPI from "../../services/api/publicAPI"
import { PeopleType } from "../types";

function* peopleAddressSaga(){
    const response = yield call(
        publicAPI.get(`/users${action.payload.id}`)
    );
    yield put({
        type: PeopleType.SET_PEOPLE_ADDRESS,
        payload: response.data
    })
}

export default peopleAddressSaga