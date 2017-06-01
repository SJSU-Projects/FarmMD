import React, { Component } from 'react';
import { connect } from 'react-redux';

//Composed component to implement authenticated route
export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    //Display home page
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    //Display home page
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }
    
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  //Map state to properties which would be accessible by Authentication component
  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  //Connect to redux store to get the data
  return connect(mapStateToProps)(Authentication);
}
