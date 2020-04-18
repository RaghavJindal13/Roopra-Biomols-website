import React, { Component } from 'react'

import Title from'./Title'
import img from "../images/expertise.png"

export default class Services extends Component {
 
  render() {
    return (
      <section className="services">
        
        <Title title="Our Expertise" />
        <img src={img} alt="Our Expertise"></img>
        
      </section>
    );
  }
}