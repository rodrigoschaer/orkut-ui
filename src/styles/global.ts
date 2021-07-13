import { createGlobalStyle } from 'styled-components'
import { OrkutStyles } from '../lib/OrkutCommons'

export default createGlobalStyle`
  * {
  	margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
  
  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction:column;
  }

  img { 
    max-width: 100%;
    height: auto;
    display:block;
  }

  ${OrkutStyles}
`
