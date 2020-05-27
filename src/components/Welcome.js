import React, { Component } from 'react'
import {
    Button,
    Divider,
    Grid,
    Header,
    Icon,
    Search,
    Segment
  } from 'semantic-ui-react'
import "pure-react-carousel/dist/react-carousel.es.css";
import CardCarousel from "./CardCarousel";

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Header inverted as='h1' dividing>
                    - Welcome to WitchDoctor -
                </Header>

                <Segment inverted placeholder>
                    <Grid columns={2} stackable textAlign='center'>
                        <Divider inverted color='grey' vertical>Or</Divider>

                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Header inverted color='grey' icon>
                                    <Icon name='search' />
                                    Browse WitchDoctor
                                </Header>
                                <Search placeholder='Search...' />
                            </Grid.Column>

                            <Grid.Column>  
                                <Header inverted color='grey' icon>
                                    <Icon name='shopping cart' />
                                    View Shop
                                </Header>
                                <Button inverted color='grey'>Shop</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


                <Header inverted as='h2' attached='top'>
                    What is WitchDoctor?
                </Header>
                <Segment inverted attached as='h3' placeholder>
                <Grid columns={2} stackable textAlign='center'>
                        <Divider inverted color='grey' vertical>
                            <Icon name='circle outline' />
                        </Divider>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Header inverted as='h2'>Company Mission Statement</Header>
                                <Header inverted as='h4'>
                                An application where traditional and conservative individuals can look into herbal/natural 
                                treatments of various health issues based on certain cultures and regions as opposed to treatment 
                                using pills and modern medicine with eye raising and questionable side effects that impact your 
                                long term health with continuous use as prompted by a majority of prescriptions.
                                <Divider section />
                                Herbal treatment, unlike modern medicine, has benefits that overweight the negatives. 
                                This is an app more directed towards older generations that will hopefully be passed down to the youth.
                                <br/>
                                <br/>
                                </Header>
                            </Grid.Column>

                            <Grid.Column>  
                                <CardCarousel inverted />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>                
            </div>
        )
    }
}

export default Welcome