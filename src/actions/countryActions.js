export function selectCountry(country) {
    return (dispatch) => {
        dispatch({type: 'SELECT_COUNTRY', country})
    }
}
