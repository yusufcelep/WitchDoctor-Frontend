import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import { selectCountry } from '../actions/countryActions'
import CountryList from './CountryList'
import CountryDetail from '../components/Country/CountryDetail'

class Countries extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={4}>
                        {this.props.countries && this.props.countries.length > 0 ? (
                        <CountryList countries={this.props.countries} selectCountry={this.props.selectCountry}/>
                        ) : null }
                    </Grid.Column>
                    
                    <Grid.Column width={10}>
                        <Route exact path={`${this.props.match.url}/countries/:countryId`} render={routerProps => <CountryDetail {...routerProps} Country={this.props.selectedCountry}/>} />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectCountry: (country) => dispatch(selectCountry(country)),
    }
}

const mapStateToProps = ({countries, selectedCountry}) => ({countries, selectedCountry})

export default connect(mapStateToProps, mapDispatchToProps)(Countries)