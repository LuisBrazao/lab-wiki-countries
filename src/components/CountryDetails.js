import React from 'react';
import myCountries from '../countries.json';
import { NavLink } from 'react-router-dom';

class CountryDetails extends React.Component {
  state = {};

  componentDidMount() {
    let countryCca = this.props.match.params.cca;
    let foundCountry = myCountries.find((country) => {
      return country.cca3 === countryCca;
    });
    console.log("updated")
    this.setState({
        foundCountry
    });
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.match.params.cca === this.props.match.params.cca) {
        return;
    }
    
    let countryCca = this.props.match.params.cca;
    let foundCountry = myCountries.find((country) => {
      return country.cca3 === countryCca;
    });
    console.log("updating")
    this.setState({
        foundCountry
    });
  }


  render() {
    return (
      this.state.foundCountry
      ?
      <div>
      <h3> {this.state.foundCountry.name.common} </h3>
      <hr />
      <p>Capital {this.state.foundCountry.capital} </p>
      <hr />
      <p>Area {this.state.foundCountry.area} </p>
      <hr />
      <ul>
        {this.state.foundCountry.borders.map((country) => {
          let foundCountry = myCountries.find((country2) => {
            return country2.cca3 === country;
          });
          return (
            <li>
              <NavLink
                activeStyle={{ color: 'red' }}
                to={`/country/${foundCountry.cca3}`}
              >
                {foundCountry.name.common}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
    : <div>Loading</div>

    );
  }
}

export default CountryDetails;
