export function selectMedicine(medicine) {
    return (dispatch) => {
        dispatch({type: 'SELECT_MEDICINE', medicine})
    }
}