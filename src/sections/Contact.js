import React, { Component } from "react";
import styled from "styled-components";
import * as Colors from "../constants/Colors";
import * as Text from "../constants/Text";
import * as Ids from "../constants/Ids";

const Style = styled.div`
  .contact {
    height: 100vh;
    background-color: ${Colors.BLUEGRAY};
  }
`;

class Contact extends Component {
  render() {
    return (
      <Style>
        <div className="contact" id={Ids.CONTACT}>
          <h2>{Text.CONTACT}</h2>
        </div>
      </Style>
    );
  }
}

export default Contact;
