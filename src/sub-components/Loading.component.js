import React from "react"
import styled, {keyframes} from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { React } from "@fortawesome/free-brands-solid-svg-icons"
import WhiteReactLogo from "../Images/react-brands-white.svg"
import BlackReactLogo from "../Images/react-brands-black.svg"

const SpinReactLogo = keyframes`
 0% { transform: rotate(0deg); }

 50% { transform: rotate(180deg); }

 100% { transform: rotate(360deg); }
`

const LoadingContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  font-size: 16px;
    
    div {
        width: 7em;
        height: 7em;
        animation-name: ${SpinReactLogo};
        animation-duration: 3s;
        animation-direction: forward;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        img {
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 800px) {
        font-size: 14px;
    }

    @media (max-width: 600px) {
        font-size: 13px;
    }

    @media (max-width: 490px) {
        font-size: 11px;
    }
`

const LoadingText = styled.p`
    color: ${props => props.mode? "white": "hsl(209, 23%, 22%)"};
    font-weight: 800;
    font-size: 2em;
`

class Loading extends React.Component {
    render() {
        return (
            <LoadingContainer>
              <div >
                <img src = {this.props.mode? WhiteReactLogo:BlackReactLogo } />
              </div>
              <LoadingText mode = {this.props.mode}>Fetching Data ...</LoadingText>
            </LoadingContainer>
        )
    }
}

export default Loading