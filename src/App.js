import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer'
import history from './history';

// import CountryPage from './components/CountryPage'
import SymptomPage from './components/SymptomPage'
import MedicinePage from './components/MedicinePage'
import Countries from './containers/Countries';
// import Medicines from './containers/Medicines';
// import Symptoms from './containers/Symptoms';

class App extends Component {
  constructor(props){
    super()
  }
  render(){
    return (
      <div className="App">
        <Router history={history}>
          <NavBar/>
          <Container>
            <Switch>
              <Route exact path = "/" component = {Welcome} />
              {/* <Route exact path = "/countries" component = {CountryPage} /> */}
              <Route exact path = "/symptoms" component = {SymptomPage} />
              <Route exact path = "/medicines" component = {MedicinePage} />
              <Route path="/countries" render={routerProps => <Countries {...routerProps} />} /> 
              {/* <Route path="/medicines" render={routerProps => <Medicines {...routerProps} />} />  */}
              {/* <Route path="/symptoms" render={routerProps => <Symptoms {...routerProps} />} />  */}
            </Switch>
          </Container>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
