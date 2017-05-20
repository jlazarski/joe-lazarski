import React, { Component } from 'react';
import { Jumbotron, Col, Row, Panel } from 'react-bootstrap';

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron>
          <h1>Hello!</h1>
          <div>
            <p className="lead">
              Welcome to the personal homepage of Joe Lazarski
            </p>
          </div>
        </Jumbotron>
        <Row>
          <Col md={4} mdOffset={4} >
            <Panel className="text-center">
              <p>More Content Coming Soon</p>
            </Panel>
          </Col>
        </Row>
      </div>  
    )
  }
};
