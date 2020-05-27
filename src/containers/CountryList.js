import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import Country from '../components/Country/Country'
import history from '../history'

class CountryList extends Component {
    listCountries = () => {
       return this.props.countries.map(country => <Segment size='big' onClick={() => this.handleClick(country)} key={country.id}><Country country={country} /></Segment>)
    }

    handleClick = (country) => {
        this.props.selectCountry(country)
        history.push(`/countries/${country.name}`)
    }

    render() {
        return (
            <div className="countrylist">
                <Segment.Group>
                    {this.listCountries()}
                </Segment.Group>
            </div>
        )
    }
}

export default CountryList;