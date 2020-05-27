import React from 'react';
import { Button } from 'semantic-ui-react'
import history from '../../history'

const CountryDetail = ({country, match}) => {
    return (
        <div className="country-detail">
            <h2>{country.photo_url}</h2>
            <h4>{country.name}</h4>
            <p>{country.region}</p>
            <Button onClick={() => history.push(`/countries/${country.name}/remedies`)}>View Remedies</Button>
        </div>
    )
}

export default CountryDetail