import React, { Component } from "react";
import styled from "styled-components";
import * as Colors from "../constants/Colors";
import * as Text from "../constants/Text";
import * as Ids from "../constants/Ids";

const Style = styled.div`
  .about {
    height: 100vh;
    background-color: ${Colors.WHITE};
  }
`;

class About extends Component {
  render() {
    return (
      <Style>
        <div className="about" id={Ids.ABOUT}>
          <h2>{Text.ABOUT}</h2>
        </div>
      </Style>
    );
  }
}

export default About;
