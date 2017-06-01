import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Weather from './datavisualization/weather';
import Graph from './datavisualization/salinitygraph';
import MoistureGraph from './datavisualization/moisturegraph';
import Header from './header';

class Home extends Component{

  componentWillMount(){
    this.props.fetchMessage();
  }

  render(){
    const divStyle = {
      border: '0px'
    };

    const main_containerStyle = {
      background:'#1a570f'
    }

    return(
      <div className="main_container" style={main_containerStyle}>
        <div className="col-md-3 left_col">
          <div className="left_col scroll-view">
            <div className="navbar nav_title" style={divStyle}>
              <a href="index.html" className="site_title">
                <img src="../../../public/images/forisLogo_green.png" alt="Logo" height="50" width="150"align="middle" style={divStyle}></img>
              </a>
            </div>
            <div className="clearfix"></div>
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
              <div className="menu_section">
                <ul className="nav side-menu">
                  <li><a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
                  <ul className="nav child_menu">
                    <li><a href="index.html">Dashboard</a></li>
                    <li><a href="index2.html">Dashboard2</a></li>
                    <li><a href="index3.html">Dashboard3</a></li>
                  </ul>
                </li>
                <li><a><i className="fa fa-bar-chart-o"></i> Data Presentation <span className="fa fa-chevron-down"></span></a>
                <ul className="nav child_menu">
                  <li><a href="chartjs.html">Chart JS</a></li>
                  <li><a href="chartjs2.html">Chart JS2</a></li>
                  <li><a href="morisjs.html">Moris JS</a></li>
                  <li><a href="echarts.html">ECharts</a></li>
                  <li><a href="other_charts.html">Other Charts</a></li>
                </ul>
              </li>
              <li><a href="http://localhost:8080/topology" target="_blank"><i className="fa fa-clone"></i>Sensor Topology<span className="fa fa-chevron-down"></span></a>
              <ul className="nav child_menu">
                <li><a href="fixed_sidebar.html">Fixed Sidebar</a></li>
                <li><a href="fixed_footer.html">Fixed Footer</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="menu_section">
        </div>
      </div>
      <div className="sidebar-footer hidden-small">
        <a data-toggle="tooltip" data-placement="top" title="Settings">
          <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
          <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Lock">
          <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
          <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </div>
  <div className="top_nav">
    <div className="nav_menu">
      <nav>
        <div className="nav toggle">
          <a id="menu_toggle"><i className="fa fa-bars"></i></a>
        </div>

        <ul className="nav navbar-nav navbar-right">
          <li className="">
            <Header></Header>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div className="right_col" role="main">
    <div className="">
      <div className="page-title">
        <div className="title_left">
          <h3>Sensor Reading Extrapolation</h3>
        </div>
      </div>

      <div className="clearfix"></div>

      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="x_panel">
            <div className="x_title">
              <h2>Salinity avg value - 7 weeks<small>Sessions</small></h2>
              <ul className="nav navbar-right panel_toolbox">
                <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                </li>
                <li><a href="#">Settings 2</a>
              </li>
            </ul>
          </li>
          <li><a className="close-link"><i className="fa fa-close"></i></a>
        </li>
      </ul>
      <div className="clearfix"></div>
    </div>
    <div className="x_content">
      <Graph></Graph>
    </div>
  </div>
</div>

<div className="col-md-6 col-sm-6 col-xs-12">
  <div className="x_panel">
    <div className="x_title">
      <h2>Mosture avg value - 7 weeks<small>Sessions</small></h2>
      <ul className="nav navbar-right panel_toolbox">
        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
      </li>
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
        <ul className="dropdown-menu" role="menu">
          <li><a href="#">Settings 1</a>
        </li>
        <li><a href="#">Settings 2</a>
      </li>
    </ul>
  </li>
  <li><a className="close-link"><i className="fa fa-close"></i></a>
</li>
</ul>
<div className="clearfix"></div>
</div>
<div className="x_content">
  <MoistureGraph></MoistureGraph>
</div>
</div>
</div>
</div>

<div className="clearfix"></div>
<div className="row">
  <div className="col-md-6 col-sm-6 col-xs-12">
    <div className="x_panel">
      <div className="x_title">
        <h2>Suggested Actions <small>Sample tasks</small></h2>
        <ul className="nav navbar-right panel_toolbox">
          <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="#">Settings 1</a>
          </li>
          <li><a href="#">Settings 2</a>
        </li>
      </ul>
    </li>
    <li><a className="close-link"><i className="fa fa-close"></i></a>
  </li>
</ul>
<div className="clearfix"></div>
</div>
<div className="x_content">

  <ul className="to_do">
    <li>
      <p>
        <input type="checkbox" className="flat"> Replace Device 104 East</input>
      </p>
    </li>
    <li>
      <p>
        <input type="checkbox" className="flat">
          pH levels are going down, check for different fertilizers</input>
      </p>
    </li>
    <li>
      <p>
        <input type="checkbox" className="flat"> Water Bill Due in 20 days</input></p>
      </li>
      <li>
        <p>
          <input type="checkbox" className="flat"> Plan for next seasonal crop</input></p>
        </li>
      </ul>
    </div>
  </div>
</div>
<Weather/>
</div>
</div>
</div>
<footer>
  <div className="clearfix"></div>
</footer>
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
