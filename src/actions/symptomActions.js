export function selectSymptom(symptom) {
    return (dispatch) => {
        dispatch({type: 'SELECT_SYMPTOM', symptom})
    }
}