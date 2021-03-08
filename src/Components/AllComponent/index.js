import React, { Component } from 'react'
import Home from "./../Home"
import About from "./../About"
import Profile from "./../Profile" 
import Portfolio from "./../Portfolio"
import SocialMedia from "./../SocialMedia"
import Work from "./../Work"
import Footer from "./../Footer"


class AllComponents extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About/>
        <SocialMedia/>
        <Footer/>
      </div>
    )
  }
}
export default AllComponents
