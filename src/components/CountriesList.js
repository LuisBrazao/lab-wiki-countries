import React from "react"
import {NavLink, Route} from "react-router-dom"
import CountryDetails from "./CountryDetails"

function CountriesList(props) {
  return (
    <ul>
      {props.countries.map((country) => {
        return (
          <li key={country.cca3}>
            <NavLink activeStyle={{ color: 'red' }} to={`/country/${country.cca3}`}>{country.name.common}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default CountriesList