import React, { Component } from 'react'
import {
    Segment,
    Grid,
    Header,
    Divider,
    List,
    Container,
    Image
  } from 'semantic-ui-react'
import img from '../icon.png'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                    <Container textAlign='center'>
                        <Grid divided inverted stackable>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Symptoms' />
                                <List link inverted>
                                    <List.Item as='a'>Database Request</List.Item>
                                    <List.Item as='a'>COVID-19</List.Item>
                                    <List.Item as='a'>Sources</List.Item>
                                    <List.Item as='a'>Contact Symptoms Team</List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Medicines' />
                                <List link inverted>
                                    <List.Item as='a'>Database Request</List.Item>
                                    <List.Item as='a'>Why Herbs?</List.Item>
                                    <List.Item as='a'>Sources</List.Item>
                                    <List.Item as='a'>Contact Medicines Team</List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Shop' />
                                <List link inverted>
                                    <List.Item as='a'>Request Product</List.Item>
                                    <List.Item as='a'>About Market</List.Item>
                                    <List.Item as='a'>Report Issue</List.Item>
                                    <List.Item as='a'>Contact Market Team</List.Item>
                                </List>
                            </Grid.Column>


                            <Grid.Column width={7}>
                                <Header inverted as='h4' content='- WitchDoctor -' />
                                <p>
                                    The Witch Doctor is a new innovation on the world of Herbs and Medical Treatment that is never been seen before.
                                </p>
                            </Grid.Column>
                        </Grid>

                        <Divider inverted section />
                        <Image centered size='mini' img src={img} />
                        <List horizontal inverted divided link size='small'>
                            <List.Item as='a' href='#'>
                                Site Map
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Contact Us
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Terms and Conditions
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Privacy Policy
                            </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default Footer