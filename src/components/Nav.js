import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';

function Nav() {
  return (
    <div>
        <StyleLink to="/products">Modeller</StyleLink>
    </div>
  )
}

const StyleLink = styled(NavLink)`
color: goldenrod;
font-size: 1em;
padding: 0.25em 1em; 
border: 2px solid goldenrod;
border-radius: 2px;
text-decoration: none;
`

export default Nav