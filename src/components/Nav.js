import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';

function Nav() {
  return (
    <div>
        <StyleLink to="/products">Tillbaka</StyleLink>
    </div>
  )
}

const StyleLink = styled(NavLink)`
color: black;
font-size: 1em;
 margin: 1em;
padding: 0.25em 1em;
border: 2px solid goldenrod;
border-radius: 2px;

`

export default Nav