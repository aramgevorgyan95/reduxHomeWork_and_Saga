const listSelectors = (state) => {
    return state.people.listPeople
}

const addressSelector = (state) => {
    return state.people.peopleaddres
}

export {
    listSelectors,
    addressSelector
}