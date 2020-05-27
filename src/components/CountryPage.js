import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import Countries from '../containers/Countries'

class CountryPage extends React.Component {
    render() {
        return (
            <div>
                <Header inverted as='h1' dividing>
                    - Countries -
                </Header>

                <Countries />
            </div>
        )
    }
}

export default CountryPage