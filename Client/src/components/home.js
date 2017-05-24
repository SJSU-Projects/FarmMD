import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component{

  componentWillMount(){
    this.props.fetchMessage();
  }

  render(){
    return(
       <div className="container body">
         <div className="main_container">

        <div className="top_nav">
                <div className="nav_menu">
                  <nav>
                    <div className="nav toggle">
                      <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                    </div>

                    <ul className="nav navbar-nav navbar-right">
                      <li className="">
                        <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                          <img src="../style/images/img.jpg"/>
                          <span className=" fa fa-angle-down"></span>
                        </a>
                        <ul className="dropdown-menu dropdown-usermenu pull-right">
                          <li><a href="javascript:;"> Profile</a></li>
                          <li>
                            <a href="javascript:;">
                              <span className="badge bg-red pull-right">50%</span>
                              <span>Settings</span>
                            </a>
                          </li>
                          <li><a href="javascript:;">Help</a></li>
                          <li><a type="submit" ng-click="logoutsession()" role="button"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                        </ul>
                      </li>


                      <li role="presentation" className="dropdown">
                        <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-envelope-o"></i>
                          <span className="badge bg-green"></span>
                        </a>
                        <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                          <li>
                            <a>
                              <span className="image"><img src="/images/img.jpg" alt="Profile Image" /></span>
                              <span>
                                <span>John Smith</span>
                                <span className="time">3 mins ago</span>
                              </span>
                              <span className="message">
                                Film festivals used to be do-or-die moments for movie makers. They were where...
                              </span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className="image"><img src="/images/img.jpg" alt="Profile Image" /></span>
                              <span>
                                <span>John Smith</span>
                                <span className="time">3 mins ago</span>
                              </span>
                              <span className="message">
                                Film festivals used to be do-or-die moments for movie makers. They were where...
                              </span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className="image"><img src="../../style/images/img.jpg" alt="Profile Image" /></span>
                              <span>
                                <span>John Smith</span>
                                <span className="time">3 mins ago</span>
                              </span>
                              <span className="message">
                                Film festivals used to be do-or-die moments for movie makers. They were where...
                              </span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className="image"><img src="../../style/images/img.jpg" alt="Profile Image" /></span>
                              <span>
                                <span>John Smith</span>
                                <span className="time">3 mins ago</span>
                              </span>
                              <span className="message">
                                Film festivals used to be do-or-die moments for movie makers. They were where...
                              </span>
                            </a>
                          </li>
                          <li>
                            <div className="text-center">
                              <a>
                                <strong>See All Alerts</strong>
                                <i className="fa fa-angle-right"></i>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

               <div className="right_col" role="main">
                <div className="row tile_count">
                    <span className="count_top"><i className="fa fa-user"></i> Today's Average Temperature </span>
                    <div className="count">2500</div>
                    <span className="count_bottom"><i className="green">4% more</i> From last Week</span>
                  <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                    <span className="count_top"><i className="fa fa-sun-o"></i> Average Temperature</span>
                    <div className="count" id="avg_temperature"> 53.6 &#8457;</div>
                    <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc"></i>3% </i> From last Week</span>
                  </div>
                    <span className="count_top"><i className="fa fa-cloud"></i> Average Humidity</span>
                    <div className="count green">89%</div>
                    <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>16% </i> From last Week</span>
                  <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                    <span className="count_top"><i className="fa fa-tint"></i> Moisture Sensor</span>
                    <div className="count green" id="avg_moisture">1023</div>
                    <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>20% </i> From last Week</span>
                  </div>
                  <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                    <span className="count_top"><i className="fa fa-globe"></i> Soil Salinity</span>
                    <div className="count" id="avg_salinity">963</div>
                    <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc"></i>12% </i> From last Week</span>
                  </div>
                  <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                    <span className="count_top"><i className="fa fa-globe"></i> pH</span>
                    <div className="count" id="avg_pH">6.00</div>
                    <span className="count_bottom"><i className="red"><i className="fa fa-sort-asc"></i>1% </i> From last Week</span>
                  </div>
                    <span className="count_top"><i className="fa fa-user"></i> Total Connections</span>
                    <div className="count">00.00</div>
                    <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                </div>
              </div>


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
