import React, { Component } from 'react'
import Footer from '../Footer/index.js'
import { ContactSection , ContactTitle , Span , FormInput , InputText , InputEmail , InputSubmit , TextArea, Form , InputSub  } from "./style.js"
class Contact extends Component {
  render() {
    return (
      <ContactSection>
            <div class="container">
                <ContactTitle > <Span> Drop </Span> Me A line </ContactTitle>
                <Form>
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputSub type="text" class="sub" placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"> </TextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
            <Footer/>
        </ContactSection>
    )
  }
}
export default Contact
