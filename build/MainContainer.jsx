import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Homepage from './Homepage.jsx';

const MainContainer = (
    <div className="container">
        <Navbar className="navbar-default" fixedTop>
            <div className="container">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            {"JL"}
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">{"Home"}</a></li>
                    </ul>
                    <ul className="hidden nav navbar-nav navbar-right">
                        <li><a href="/login">{"Sign in"}</a></li>
                    </ul>
                </Navbar.Collapse>
            </div>
        </Navbar>
        <Homepage />
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