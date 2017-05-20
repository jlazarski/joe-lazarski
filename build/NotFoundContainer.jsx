import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import RickRoll from './RickRoll.jsx';

const MainContainer = (
    <div className="container">
        <Navbar className="navbar-default" fixedTop>
            <div className="container">
                <Navbar.Header>
                    <Navbar.Brand>
                        {"JL"}
                    </Navbar.Brand>
                </Navbar.Header>
            </div>
        </Navbar>
        <RickRoll />
        <div className="footer">
            <div className="container">
                <span className="copyright pull-right">{"© 2017 Joe Lazarski"}</span>
                <ul className="links hidden">
                    <li><a href="/">{"Home"}</a></li>
                </ul>
                <div className="clearfix"></div>
            </div>
        </div>
    </div>
);

export default MainContainer;