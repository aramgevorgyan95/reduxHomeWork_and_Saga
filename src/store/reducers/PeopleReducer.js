import { PeopleType } from "../types";

const LIST = {
    listPeople: [],
    peopleaddres: null
}

export default function (state = LIST, action) {
    const { type, payload } = action
    switch (type) {
        case PeopleType.GET_PEOPLES_LIST:
            return { ...state, listPeople: payload }
        case PeopleType.SET_PEOPLE_ADDRESS:
            return { ...state, peopleaddres: payload }
        default:
            return state;
    }
}