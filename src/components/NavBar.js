import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-scroll";
import * as Colors from "../constants/Colors";
import * as Text from "../constants/Text";
import * as Ids from "../constants/Ids";

const Style = styled.div`
  .navbar {
    background-color: ${Colors.DARKBLUE};
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    z-index: 1000;
    border-bottom: 2px solid ${Colors.BLUEGREEN};
  }

  .navbar-brand,
  .navbar-nav,
  .nav-item {
    color: ${Colors.WHITE};
    margin-left: 10px;

    &:hover {
      color: ${Colors.BLUEGREEN};
      cursor: pointer;
    }
  }
`;

export const NavBar = () => (
  <Style>
    <Navbar expand="lg">
      <Navbar.Brand href="/">{Text.NAME}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link
              activeClass="active"
              to={Ids.HOME}
              spy={true}
              smooth="true"
              offset={0}
              duration="500"
            >
              {Text.HOME}
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              activeClass="active"
              to={Ids.ABOUT}
              spy={true}
              smooth="true"
              offset={0}
              duration="500"
            >
              {Text.ABOUT}
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              activeClass="active"
              to={Ids.PROJECTS}
              spy={true}
              smooth="true"
              offset={0}
              duration="500"
            >
              {Text.PROJECTS}
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              activeClass="active"
              to={Ids.CONTACT}
              spy={true}
              smooth="true"
              offset={0}
              duration="500"
            >
              {Text.CONTACT}
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Style>
);
