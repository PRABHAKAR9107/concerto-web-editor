import React, { Component } from 'react';
import logo from "../assets/APLogo.png";
import "./Style.css";
export default class Logo extends Component {
    render() {
        return (
            <div className="logo">
              <img src={logo} className="logo" alt="logo" />
            </div>
        )
    }
}
