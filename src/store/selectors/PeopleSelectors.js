const listSelectors = (state) =>  state.people.listPeople


const addressSelector = (state) => state.people.peopleaddres



const statusState = (state) => state.people.status


export {
    listSelectors,
    addressSelector,
    statusState
}