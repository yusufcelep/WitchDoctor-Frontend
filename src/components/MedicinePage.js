import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import Medicines from '../containers/Medicines'

class MedicinePage extends React.Component {
    render() {
        return (
            <div>
                <Header inverted as='h1' dividing>
                    - Medicines -
                </Header>

                {/* <Medicines /> */}
            </div>
        )
    }
}

export default MedicinePage