import React from 'react';
import logo from './logo.svg';
import './App.css';
import myCountries from './countries.json';
import Navbar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

class App extends React.Component {
  state = {
    countries: myCountries,
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/country/:cca" component={CountryDetails} />
        </Switch>
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            {/* React Router Route rendering the CountryDetails should go here */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
