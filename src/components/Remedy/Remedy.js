import React from 'react';
import { Header} from 'semantic-ui-react'

const Remedy = (props) => {
    return (
        <div>
            <h3>{props.remedy.symptom.name}</h3>
            <h3>{props.remedy.medicine.photo_url}</h3>
            <p>{props.remedy.medicine.name}</p>
        </div>
    )
}

export default Remedy