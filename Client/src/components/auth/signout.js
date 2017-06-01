import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component{

  //Sign Out
  componentWillMount(){
    this.props.signoutUser();
  }

  render() {
    return <div></div>;
    }
  }

  //Connect to redux store to get the data
  export default connect(null, actions)(Signout);
