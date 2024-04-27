import { PeopleType } from "../types";

function getPeoples (list) {
    return {
        type: PeopleType.GET_PEOPLES_LIST,
        payload: list
    }
}

function setPeopleAddress (address) {
    return {
        type: PeopleType.SET_PEOPLE_ADDRESS,
        payload: address
    }
}

export {
    getPeoples,
    setPeopleAddress
}