import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component{

  componentWillMount(){
    this.props.fetchMessage();
  }

  render(){
    return(
      <div className="main_container">
        <div className="col-md-3 left_col">
          <div className="left_col scroll-view">
            <div className="navbar nav_title">
              <a href="/home" className="site_title"><span><img src="./style/images/forisLogo.png"/>
              </span></a>
            </div>

            <div className="clearfix"></div>

            <div className="profile">
              <div className="profile_pic">
                <img src="./style/images/img.jpg" className="img-circle profile_img"/>
              </div>
              <div className="profile_info">
                <span>Welcome,</span>
              </div>
            </div>

            <br />

            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
              <div className="menu_section">
                <h3>General</h3>
                <ul className="nav side-menu">
                  <li><a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu">
                      <li><a href="/home">Dashboard</a></li>
                      <li><a href="index3.php">Dashboard3</a></li>
                    </ul>
                  </li>
                  <li><a><i className="fa fa-table"></i> Sensors <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu">
                      <li><a href="/water">Water Consumption</a></li>
                      <li><a href="/moisture">Moisture</a></li>
                      <li><a href="/temperature">Temperature</a></li>
                      <li><a href="/humidity">Humidity</a></li>
                      <li><a href="/pH">pH</a></li>
                      <li><a href="/salinity">Salinity</a></li>
                    </ul>
                  </li>
                  <li><a href="/sensortopology"><i className="fa fa-globe"></i> Sensor Topology</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Map state to properties which would be accessible by Home component
function mapStateToProps(state){
  return {message: state.auth.message};
}

//Connect to common store
export default connect(mapStateToProps,actions)(Home);
