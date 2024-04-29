import { put, takeLatest } from "redux-saga/effects";
import publicAPI from "../../services/api/publicAPI";
import { PeopleType } from "../types";
import { PeopleAction } from "../actions";

function* getPeoplesGen() {
    try {
        const response = yield publicAPI.get('/users')
        console.log(response.data);
        yield put(PeopleAction.setPeopleListAction(response.data))
    } catch (error) {
        console.log(error);
    }

}
function* getPeopleAddressGen({ payload }) {
    const response = yield publicAPI.get(`/users/${payload}`)
    yield put(PeopleAction.setPeopleAddressAction(response.data.address
    ))
    yield put(PeopleAction.changeStatus(false))
}

function* peoplesWatcher() {
    yield takeLatest(PeopleType.GET_PEOPLES_LIST, getPeoplesGen);
    yield takeLatest(PeopleType.GET_PEOPLE_ADDRESS, getPeopleAddressGen)
}

export default peoplesWatcher;