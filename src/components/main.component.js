import React, {useContext} from "react"
import styled from 'styled-components'
import CountrySnapshot from "./country-snapshot.component"
import SearchBar from "../sub-components/search"
import DropDown from "../sub-components/dropdown"
import {CountryData} from "../Context/CountryDataContext"
import Loading from "../sub-components/Loading.component"

function MainComponent (props) {

  const contextObject = useContext(CountryData);
  
  const [searchQuery, setSearchQuery] = React.useState(''); 
  
  const trackSearchQuery = function (e) { 
    setSearchQuery(e.target.value.toLowerCase());
  }
    
  return (
    <Section mode = {props.mode} >

      <div className = "form-elements">
        <SearchBar 
          mode = {props.mode}
          handleChange = {trackSearchQuery} 
        />
        <DropDown 
          mode = {props.mode} 
        />
      </div>

      <CountryInfo >
        {
          contextObject.countryData.length === 0? (
            <Loading mode = {props.mode} />
          ) : (
            contextObject.countryData.filter((country) => {
              return country.name.common.toLowerCase().includes(searchQuery)
            }).map((country) => {
              return <CountrySnapshot 
                key = {country.name.common}
                population = {country.population}
                image = {country.flags.png}
                name = {country.name.common}
                capital = {country.capital}
                region = {country.region}
                mode = {props.mode}
              />
            })
          )
        }  
      </CountryInfo>
       
    </Section>
  )
}

export default MainComponent


const Section = styled.main`
  background-color: ${props => props.mode === true ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};

  .form-elements {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    padding: 40px 60px;
  }
`

const CountryInfo = styled.section`
  padding: 0px 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: repeat(2, fit-content);
  grid-gap: 50px;
  justify-content: end;
`