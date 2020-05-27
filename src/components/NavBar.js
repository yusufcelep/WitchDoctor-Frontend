import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Menu, Header, Button, Icon } from 'semantic-ui-react'
import history from '../history'
import img from '../icon.png'

const countryOptions = [
    { key: 'Turkey', text: 'Turkey', value: 'Turkey' },
    { key: 'United States of America', text: 'United States of America', value: 'United States of America' },
    { key: 'Russia', text: 'Russia', value: 'Russia' },
    { key: 'Poland', text: 'Poland', value: 'Poland' },
    { key: 'China', text: 'China', value: 'China' },
    { key: 'South Korea', text: 'South Korea', value: 'South Korea' },
    { key: 'Japan', text: 'Japan', value: 'Japan' },
    { key: 'India', text: 'India', value: 'India' },
    { key: 'Australia', text: 'Australia', value: 'Australia' },
    { key: 'Germany', text: 'Germany', value: 'Germany' },
    { key: 'France', text: 'France', value: 'France' },
    { key: 'Mexico', text: 'Mexico', value: 'Mexico' },
    { key: 'United Kingdom', text: 'United Kingdom', value: 'United Kingdom' },
    { key: 'Morocco', text: 'Morocco', value: 'Morocco' },
    { key: 'South Africa', text: 'South Africa', value: 'South Africa' },
    { key: 'Tunisia', text: 'Tunisia', value: 'Tunisia' },
    { key: 'Spain', text: 'Spain', value: 'Spain' },
    { key: 'Italy', text: 'Italy', value: 'Italy' },
    { key: 'Egypt', text: 'Egypt', value: 'Egypt' },
    { key: 'Algeria', text: 'Algeria', value: 'Algeria' },
    { key: 'Kazakhstan', text: 'Kazakhstan', value: 'Kazakhstan' },
  ]

class NavBar extends React.Component {
    render() {
        return (
            <Menu inverted size='large'>
                <Menu.Item header>
                    <img src={img} onClick={() => history.push('/')} />
                </Menu.Item>
                {/* {this.props.currentCountry.id ?
                <Menu.Item onClick={() => this.props.changeCountry()}>Change Country</Menu.Item> :
                <Menu.Item href="/countries">Choose Country</Menu.Item>
                } */}
                <Menu.Item 
                    name="countries"
                    onClick={() => history.push('/countries')}
                />
                <Menu.Item 
                    name="symptoms"
                    onClick={() => history.push('/symptoms')}
                />
                <Menu.Item 
                    name="medicines"
                    onClick={() => history.push('/medicines')}
                />

                <Menu.Menu position='right'>
                    {/* <Menu.Item 
                        name="country"
                        onClick={() => history.push('/countries')}
                    /> */}
                    <Dropdown
                        button 
                        className='icon'
                        labeled
                        icon='world'
                        options={countryOptions}
                        search
                        text='Select Country'
                    />

                    <Menu.Item icon>
                        <Icon name='cart' />
                    </Menu.Item>

                    <Dropdown item text='More'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Favorites</Dropdown.Item>
                            <Dropdown.Item>Featured Blogs</Dropdown.Item>
                            <Dropdown.Item>Forums</Dropdown.Item>
                            <Dropdown.Item>About Us</Dropdown.Item>
                            <Dropdown.Item>Careers</Dropdown.Item>
                            <Dropdown.Item>Contact Us</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item 
                        name="Sign In"
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}

function mapDispatchToProps(dispatch) {
}

export default connect(null, mapDispatchToProps)(NavBar)