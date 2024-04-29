import { all } from 'redux-saga/effects'
import peoplesWatcher from './peopleSaga';


function* rootSaga() {
    yield all([peoplesWatcher()]);
}


export default rootSaga;