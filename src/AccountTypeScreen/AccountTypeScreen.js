import React, { Component } from "react";
import "./AccountTypeScreen.css";

export default class AccountTypeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="type-container">
        <div className="type-title">{this.props.type}</div>
      </div>
    );
  }
}
