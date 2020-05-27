import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import Medicine from '../components/Medicine/Medicine'
import history from '../history'

class MedicineList extends Component {
    listMedicines = () => {
       return this.props.medicines.map(medicine => <Segment size='big' onClick={() => this.handleClick(medicine)} key={medicine.id}><Medicine medicine={medicine} /></Segment>)
    }

    handleClick = (medicine) => {
        this.props.selectMedicine(medicine)
        history.push(`/medicines/${medicine.name}`)
    }

    render() {
        return (
            <div className="medicinelist">
                <Segment.Group>
                    {this.listMedicines()}
                </Segment.Group>
            </div>
        )
    }
}

export default MedicineList;