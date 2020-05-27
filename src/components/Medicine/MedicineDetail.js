import React from 'react';
import { Button } from 'semantic-ui-react'
import history from '../../history'

const MedicineDetail = ({medicine, match}) => {
    return (
        <div className="medicine-detail">
            <h2>{medicine.photo_url}</h2>
            <h3>{medicine.name}</h3>
            <h5>{medicine.latin}</h5>
            <p>{medicine.detail}</p>
        </div>
    )
}

export default MedicineDetail