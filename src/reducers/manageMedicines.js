const initialState = {
    medicines:[],
    selectedMedicine: {},
    loading: false
}

export default function manageMedicines(state= initialState, action) {
    switch (action.type) {
        case 'SELECT_MEDICINE':
            return {...state, selectedMedicine: action.medicine}
        default:
        return state
    }
}