import React, { Component } from "react";
import styled from "styled-components";
import * as Colors from "../constants/Colors";
import * as Text from "../constants/Text";
import * as Ids from "../constants/Ids";

const Style = styled.div`
  .project {
    height: 100vh;
    background-color: ${Colors.DARKWHITE};
  }
`;

class Projects extends Component {
  render() {
    return (
      <Style>
        <div className="project" id={Ids.PROJECTS}>
          <h2>{Text.PROJECTS}</h2>
        </div>
      </Style>
    );
  }
}

export default Projects;
