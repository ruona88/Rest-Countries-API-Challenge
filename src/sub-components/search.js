import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import whiteSearch from "../Images/magnifying-glass-solid-white.svg"
import darkSearch from "../Images/magnifying-glass-solid-black.svg"

const Input = styled.input`
  width: 400px;
  padding: 10px 10px 10px 50px;
  border: none;
  background-color: ${props => props.mode === true? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  color: ${props => props.mode === true? "white": "hsl(207, 26%, 17%)"};
  box-shadow: ${props => !props.mode ? "1px 1px 1px 0px lightgrey": "none"};
  background-image: ${props => props.mode === true? `url(${whiteSearch})`: `url(${darkSearch})` };
  background-repeat: no-repeat;
  background-size: 15px;
  background-position: bottom 10px left 15px;

  @media (max-width: 729px) {
    width: 100vw;
  }
  
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.mode === true? "hsl(0, 0%, 98%)": "hsl(209, 23%, 22%)"}
  }
`

export default function SearchBar (props) {

  return (
      <Input
        mode = {props.mode}
        type = "search"
        placeholder = "Search for a Country"
        name = "search-query"
        className = "searchField"
        onChange = {props.handleChange}
      >
      </Input>
  )
}