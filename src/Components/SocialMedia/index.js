import React, { Component } from 'react'
import { SocialMedia , Social , Icon , SocialDesc , Span , SpanInfo } from "./style.js"
import axios from "axios"

class Socialmedia extends Component {

  state = {
    social:[]
  }

  componentDidMount=()=>{
    axios.get('js/data.json').then( res=> { this.setState( { social: res.data.social } ) } )
  }

  render() {
      const {social} = this.state;
      const Sl = social.map((s)=>{
      return(
            <Social item = {s.id} key = {s.id} >
                <Icon className= {s.icon} ></Icon>
                <SocialDesc >
                    <Span className = {s.title} ></Span>
                    <SpanInfo className = {s.body} ></SpanInfo>
                </SocialDesc>
            </Social> 
      )
      })
    
    return (
      <SocialMedia >
         {Sl}
  </SocialMedia>
  
    )
  }
}
export default Socialmedia
