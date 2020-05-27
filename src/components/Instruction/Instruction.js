import React from 'react';
import { Header} from 'semantic-ui-react'

const Instruction = (props) => {
    return (
        <div>
            <h3>{props.instruction.symptom.name}</h3>
            <h5>{props.instruction.country.name}</h5>
            <p>{props.instruction.instruction}</p>
        </div>
    )
}

export default Instruction