import React from "react"

export const CountryData = React.createContext();

const CountryDataContext = (props) => {
    
    const [allCountries, setAllCountries] = React.useState([]);
    const [allCountriesCopy, setAllCountriesCopy] = React.useState([]);
    const [selected, setSelected] = React.useState("Filter By Region")

    const getAllCountriesData = async () => { 
        let response = await fetch("https://restcountries.com/v3.1/all");
        let result = await response.json();
        setAllCountries(result);
        setAllCountriesCopy(result)
    }

    React.useEffect(() => {
        getAllCountriesData()
    }, [])

    const applyFilterByRegion = (str) => {
       setSelected(str);
       setAllCountriesCopy(allCountries.filter((country) => {
        return country.region.toLowerCase() === str.toLowerCase();
      }))
    }

    const restoreAllCountries = () => {
        setSelected("Filter By Region")
        setAllCountriesCopy(allCountries)
    }

    const contextObject = {
        allCountries: allCountries,
        countryData: allCountriesCopy,
        applyFilterByRegion: applyFilterByRegion,
        restoreAllCountries: restoreAllCountries,
        selected: selected,
    }

    return (
        <CountryData.Provider value = {contextObject}>
          {props.children}
        </CountryData.Provider>
    )
}

export default CountryDataContext