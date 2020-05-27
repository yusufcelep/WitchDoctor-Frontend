import React from 'react';
import { Header} from 'semantic-ui-react'

const Medicine = (props) => {
    return (
        <div>
            <h3>{props.medicine.name}</h3>
            <h5>{props.medicine.latin}</h5>
        </div>
    )
}

export default Medicine