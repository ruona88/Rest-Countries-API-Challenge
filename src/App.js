import React from "react"
import {Routes, Route} from "react-router-dom"
import './App.css';
import CountryDetails from "./components/CountryDetails.component"
import Header from "./components/header.component"
import MainComponent from "./components/main.component"

const App = () => {
  const [countryData, setCountryData] = React.useState([]); 
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  function updateCountryData (newArray) {
    setCountryData(newArray);
  }
  
  function toggleMode () {
    setIsDarkMode(currentMode => !currentMode);
  }
  
  return (
    <div className = {isDarkMode? "App-container-dark": "App-container-light"}>
      <Routes>
        <Route path = "/" element = {<Header mode = {isDarkMode}  handleClick = {toggleMode}/>}>
          <Route index element = {<MainComponent mode = {isDarkMode} countryData = {countryData} handleClick = {updateCountryData}/>} />
          <Route path = ":name" element = {<CountryDetails mode = {isDarkMode} />} />
        </Route>
      </Routes>
    </div>
  )
}



export default App 