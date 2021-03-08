import React from 'react'
import { Link } from "react-router-dom"
import { NavbarSection , Logo , LogoText , Anchor , ListItem , UlList , Alink } from './style.js'
 

const Navbar = () => {
      return (

      <NavbarSection>

        <div className ="container" >

          <Logo>
            <LogoText > ultra profile </LogoText>
          </Logo>

          <UlList className = "ul-list" >
            <ListItem > <Link to= "/" > home </Link> </ListItem>
            <ListItem > <Anchor  href ="#" > work </Anchor> </ListItem>
            <ListItem > <Anchor  href ="#" > portfolio </Anchor> </ListItem>
            <ListItem > <Anchor  href ="#" > resume </Anchor> </ListItem>
            <ListItem > <Anchor  href ="#" > About </Anchor> </ListItem>
            <ListItem > <Link to = "/Contact" > Contact </Link> </ListItem>
          </UlList>

        </div>

      </NavbarSection>
    )
}
export default Navbar;
