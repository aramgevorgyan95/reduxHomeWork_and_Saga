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

// function changeStatus (status){
//     return {
//         type: PeopleType.TOGGLE_STATUS,
//         payload: status
//     }
// }

export {
    getPeoples,
    setPeopleAddress,
    // changeStatus
}