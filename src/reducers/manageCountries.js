const initialState = {
    countries:[],
    selectedCountry: {},
    loading: false
}

export default function manageCountries(state= initialState, action) {
    switch (action.type) {
        case 'SELECT_COUNTRY':
            return {...state, selectedCountry: action.country}
        default:
        return state
    }
}