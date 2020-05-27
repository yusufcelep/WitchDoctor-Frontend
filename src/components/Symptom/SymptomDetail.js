import React from 'react';
import { Button } from 'semantic-ui-react'
import history from '../../history'

const SymptomDetail = ({symptom, match}) => {
    return (
        <div className="symptom-detail">
            <h2>{symptom.name}</h2>
            <h5>{symptom.detail}</h5>
        </div>
    )
}

export default SymptomDetail