import React from 'react';
import { Header} from 'semantic-ui-react'

const Symptom = (props) => {
    return (
        <div>
            <h3>{props.symptom.name}</h3>
        </div>
    )
}

export default Symptom