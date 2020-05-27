import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import Symptoms from '../containers/Symptoms'

class SymptomPage extends React.Component {
    render() {
        return (
            <div>
                <Header inverted as='h1' dividing>
                    - Symptoms -
                </Header>        

                {/* <Symptoms /> */}
            </div>
        )
    }
}

export default SymptomPage