import React, { Component } from "react";
import styled from "styled-components";
import * as Colors from "../constants/Colors";
import * as Text from "../constants/Text";
import * as Ids from "../constants/Ids";

const Style = styled.div`
  .home {
    height: 100vh;
    background-color: ${Colors.BLUEGRAY};
  }
`;

class Home extends Component {
  render() {
    return (
      <Style>
        <div className="home" id={Ids.HOME}>
          <h2>{Text.HOME}</h2>
        </div>
      </Style>
    );
  }
}

export default Home;
