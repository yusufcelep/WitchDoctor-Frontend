import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import { selectSymptom } from '../actions/symptomActions'
import SymptomList from './SymptomList'
import SymptomDetail from '../components/Symptom/SymptomDetail'

class Symptoms extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={4}>
                        {this.props.symptoms && this.props.symptoms.length > 0 ? (
                        <SymptomList symptoms={this.props.symptoms} selectSymptom={this.props.selectSymptom}/>
                        ) : null }
                    </Grid.Column>

                    <Grid.Column width={10}>
                        <Route exact path={`${this.props.match.url}/symptoms/:symptomId`} render={routerProps => <SymptomDetail {...routerProps} Symptom={this.props.selectedSymptom}/>} />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectSymptom: (symptom) => dispatch(selectSymptom(symptom)),
    }
}

const mapStateToProps = ({symptoms, selectedSymptom}) => ({symptoms, selectedSymptom})

export default connect(mapStateToProps, mapDispatchToProps)(Symptoms)