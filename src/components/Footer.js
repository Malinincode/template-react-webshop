import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
    <FooterText>
      <p>
      Copywrite Velocissimo
      </p>
      
    </FooterText>
  )
}

const FooterText = styled.div `
background-color: black;
height: 70px;
padding: 35px; 
color: white;
`

export default Footer