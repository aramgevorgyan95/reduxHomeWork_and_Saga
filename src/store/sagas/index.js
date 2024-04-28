import { PeopleType } from "../types";
import { takeLatest } from 'redux-saga/effects'
import peopleAddressSaga from "./peopleAddressSaga";
import peoplesSaga from "./peopleSaga";

function* rootSaga() {
    yield takeLatest(PeopleType.GET_PEOPLES_LIST, peoplesSaga);
    yield takeLatest(PeopleType.SET_PEOPLE_ADDRESS, peopleAddressSaga)
}


export default rootSaga;