import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import { selectMedicine } from '../actions/medicineActions'
import MedicineList from './MedicineList'
import MedicineDetail from '../components/Medicine/MedicineDetail'

class Medicines extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={4}>
                        {this.props.medicines && this.props.medicines.length > 0 ? (
                        <MedicineList medicines={this.props.medicines} selectMedicine={this.props.selectMedicine}/>
                        ) : null }
                    </Grid.Column>

                    <Grid.Column width={10}>
                        <Route exact path={`${this.props.match.url}/medicines/:medicineId`} render={routerProps => <MedicineDetail {...routerProps} Medicine={this.props.selectedMedicine}/>} />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectMedicine: (medicine) => dispatch(selectMedicine(medicine)),
    }
}

const mapStateToProps = ({medicines, selectedMedicine}) => ({medicines, selectedMedicine})

export default connect(mapStateToProps, mapDispatchToProps)(Medicines)