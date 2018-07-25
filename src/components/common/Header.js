import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {
  render() {
    return (
      <nav>
        <Link to="/" activeClassname="active">Borabot</Link>
        {" / "}
        <Link to="/board" activeClassname="active">Board</Link>
        {" / "}
        <Link to="/profile" activeClassname="active">Profile</Link>
        {this.props.children}
      </nav>
    );
  }
}