import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Jumbotron, Col, Row, Panel } from 'react-bootstrap';

export default class RickRoll extends Component {
  render() {
    const opts = {
        width: '300px',
        playerVars: { 
          autoplay: 1
        }
    };    
    return (
      <div className="container">
        <Jumbotron style={{marginTop: "0px", marginBottom: "0px", paddingBottom: "0px", paddingTop: "0px"}}>
          <h1 style={{fontSize: "4em", fontWeight: "bolder"}}>{"Aww Snap!"}</h1>
          <YouTube
            videoId="dQw4w9WgXcQ"
            opts={opts}
          />
          <div>
            <p className="lead">
              {"Looks like you hit a 404."}<br />
              <a href="/">{"[Go back to the homepage]"}</a>
            </p>
          </div>
        </Jumbotron>
      </div>  
    )
  }
};
