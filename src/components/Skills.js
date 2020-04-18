

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, { Component } from 'react';
import ReactPlayer from "react-player";
import Banner from "../components/Banner";
import img from "../images/per.PNG"


export const MaterialGrid = () => {

  return (
    <div>
      <Grid container spacing={4}>
        
        <Grid item xs={6}>
          <Paper><Banner title="About Roopra Biomols">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=1V_wYYIJhVE&feature=emb_logo"
      /><br></br>
      
      </Banner></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
          <Banner title="Our Expertise">
              <p>Contract Bioinformatics Research</p>
              <img src= {img}></img>
              <p>Bioinformatics KnowledgeBase Development</p>
              <img src= {img}></img>
              <p>Bioinformatics Application/Software Design</p>
              <img src= {img}></img>
              <p>Bioinformatics Cloud</p>
              <img src= {img}></img>


      </Banner>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialGrid;