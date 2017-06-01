
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component{

  //Display Header or Top Menu bar
  renderSigninText(){
    if(this.props.authenticated){
      return(
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      );
    }
    else {
      return[
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }
  render(){
    return(
      <nav className = "navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this.renderSigninText()}
        </ul>
      </nav>
    );
  }
}

//Map state to properties which would be accessible by Home component
function mapStateToProps(state){
  return {authenticated: state.auth.authenticated};
}

//Connect to common store
export default connect(mapStateToProps) (Header);
