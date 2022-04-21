import React from 'react'
import styled from 'styled-components';
import logo from './velocissimologo.png'; 


function Header() {
  
  return (
    <HeaderColor>
      <img src={logo} alt="Logo" />
    </HeaderColor>
  )
  }


const HeaderColor = styled.div `
background-color: white;
height: 150px;
color: grey;
margin-bottom: 20px;
` 

export default Header




