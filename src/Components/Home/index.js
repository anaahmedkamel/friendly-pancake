import React, { Component } from 'react'
import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn } from "./style.js"

const Home  =()=> {
    return (
      <HomeSection>
       <div className = "container" >
         <HomeInformation>
          <HomeTitle > ahmed kamel </HomeTitle>
          <HomeInfo > creative director </HomeInfo>
          <HomeDesc> im a poressional <Span> wep developer </Span> and front-end developer  </HomeDesc>
          <HomeBtn className = "home-btn" > lets begin </HomeBtn>
         </HomeInformation>
        </div>
      </HomeSection>
    )
  
}
export default Home
