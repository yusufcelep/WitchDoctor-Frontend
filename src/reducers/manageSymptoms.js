const initialState = {
    symptoms:[],
    selectedSymptom: {},
    loading: false
}

export default function manageSymptoms(state= initialState, action) {
    switch (action.type) {
        case 'SELECT_SYMPTOM':
            return {...state, selectedSymptom: action.symptom}
        default:
        return state
    }
}