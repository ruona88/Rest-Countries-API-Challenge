import React from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"


const Article = styled.article`
  cursor: pointer;
  max-width: 400px;
  background-color: ${props => props.mode === true? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  box-shadow: ${props => !props.mode ? "1px 1px 1px 0px lightgrey": "none"};
  transition: all 0.3s linear;

  @media only screen and (max-width: 649px) {
    max-width: unset;
    width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }

  .background-image-div {
    height: 140px;

    .image {
        width: 100%;
        height: 100%;
    }
  }

  .card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .card-name {
        margin-bottom: 10px;
    }

    .card-info-item {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
  }
`
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 1.5em 1em 1.5em 1em;
  font-size: 16px;
  color: ${props => props.mode === true? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"};
  
  .card-name {
    font-size: 1.1em;
    font-weight: 800;
  }

  .card-info-container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .card-info-item {
      list-style: none;
      font-size: 0.6em;
      font-weight: 800;

      .card-info-item-spec {
          font-weight: 300;
      }
    }
  }
`

export default function CountrySnapshot (props) {

  return (
      <Link to = {`${props.name.toLowerCase().split(" ").join("")}`} style = {{textDecoration: "none"}} >
      <Article mode = {props.mode} >
        <div className = "background-image-div">
          <img src = {props.image} className = "image" alt = {props.name} title = {props.name}/>
        </div>
        <InfoDiv mode = {props.mode} >
          <p className = "card-name" >{props.name}</p>
          <ol className = "card-info-container">
            <li 
              className = "card-info-item" >Population: <span className = "card-info-item-spec">{props.population.toLocaleString()}</span>
            </li>
            <li 
              className = "card-info-item" >Region: <span className = "card-info-item-spec region" >{props.region}</span>
            </li>
            <li 
            className = "card-info-item" >Capital: <span className = "card-info-item-spec" >{props.capital}</span>
            </li>
          </ol>
        </InfoDiv>
      </Article>   
    </Link>
  )
}