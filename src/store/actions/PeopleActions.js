import { PeopleType } from "../types";

function getPeopleListAction () {
    return {
        type: PeopleType.GET_PEOPLES_LIST,
    }
}
function setPeopleListAction (list) {
    return {
        type: PeopleType.SET_PEOPLES_LIST,
        payload:list
    }
}

function getPeopleAddressAction (id) {
    return {
        type: PeopleType.GET_PEOPLE_ADDRESS,
        payload: id
    }
}
function setPeopleAddressAction (address) {
    return {
        type: PeopleType.SET_PEOPLE_ADDRESS,
        payload: address
    }
}

function changeStatus (status){
    return {
        type: PeopleType.TOGGLE_STATUS,
        payload: status
    }
}

export {
    getPeopleListAction,
    setPeopleListAction,
    getPeopleAddressAction,
    setPeopleAddressAction,
    changeStatus
}