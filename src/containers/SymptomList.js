import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import Symptom from '../components/Symptom/Symptom'
import history from '../history'

class SymptomList extends Component {
    listSymptoms = () => {
       return this.props.symptoms.map(symptom => <Segment size='big' onClick={() => this.handleClick(symptom)} key={symptom.id}><Symptom symptom={symptom} /></Segment>)
    }

    handleClick = (symptom) => {
        this.props.selectSymptom(symptom)
        history.push(`/symptoms/${symptom.name}`)
    }

    render() {
        return (
            <div className="symptomlist">
                <Segment.Group>
                    {this.listSymptoms()}
                </Segment.Group>
            </div>
        )
    }
}

export default SymptomList;