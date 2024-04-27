import { combineReducers } from "redux";
import PeopleReducer from "./PeopleReducer";


const reducers = combineReducers({
    people: PeopleReducer
});

export default reducers;