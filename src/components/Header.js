import React from 'react'
import styled from 'styled-components';


function Header() {
  return (
    <HeaderText>
      
      <h1>
        Logotype
      </h1>

    </HeaderText>
  )
}

const HeaderText = styled.div `
background-color: white /* rgb(69,77,88) */;
height: 70px;
padding: 40px;
color: grey;
`

export default Header