
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
var axios = require('axios');

//Define day object
var weekDay = {

     0 : 'Sunday',
     1 : 'Monday',
     2 : 'Tuesday',
     3 : 'Wednesday',
     4 : 'Thursday',
     5 : 'Friday',
     6 : 'Saturday'
}
var latitude,longitude;

//Get current location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        latitude = 33.40;
        longitude = -83.42;
    }
}

//Show current location
function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

class Weather extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dateObj: (new Date())
    };
  }

  componentDidMount(){
    getLocation();
    var that = this;
    var today;
    var cdate;
    setInterval(function() {
      //Fetch weather data
      that.props.fetchWeatherData(latitude,longitude);
    }, 10000);
  }



  render(){
    var that = this;
    var date1 = that.state.dateObj;
    var today = date1.getDay();

    function mapDayToWeatherData(){
      var result = that.props.weatherData;
      var weatherData = [];
      weatherData = that.props.weatherData;
      var finalArray = [];
      var j = 0;

      for(var i=today; i < weatherData.length;i++){
        finalArray[j] = weatherData[i];
        j++;
      }

      for(var i=today-1; i >= 0;i--){
        finalArray[j] = weatherData[i];
        j++;
      }
      return finalArray;
    }

      var result = [];
      result = mapDayToWeatherData();

      return(
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="x_panel">
            <div className="x_title">
              <h2>Weather Forecast <small>Sessions</small></h2>
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
              <div className="row">
                <div className="col-sm-12">
                  <div className="temperature"><b>{weekDay[today]}</b>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="weather-icon">
                    <canvas height="84" width="84" id="partly-cloudy-day"></canvas>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="weather-text">
                    <h2>California</h2>
                    <h2>Weather Forecast For a week from today</h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="weather-text pull-right">
                  <h3 className="degrees"></h3>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="row weather-days">
                <div className="col-sm-2">
                  <div className="daily-weather">
                    <h2 className="day">Mon</h2>
                    <h3 className="degrees">{result[0]}</h3>
                    <canvas id="clear-day" width="32" height="32"></canvas>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="daily-weather">
                    <h2 className="day">Tue</h2>
                    <h3 className="degrees">{result[1]}</h3>
                    <canvas height="32" width="32" id="rain"></canvas>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="daily-weather">
                    <h2 className="day">Wed</h2>
                    <h3 className="degrees">{result[2]}</h3>
                    <canvas height="32" width="32" id="snow"></canvas>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="daily-weather">
                    <h2 className="day">Thu</h2>
                    <h3 className="degrees">{result[3]}</h3>
                    <canvas height="32" width="32" id="sleet"></canvas>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="daily-weather">
                    <h2 className="day">Fri</h2>
                    <h3 className="degrees">{result[4]}</h3>
                    <canvas height="32" width="32" id="wind"></canvas>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="daily-weather">
                    <h2 className="day">Sat</h2>
                    <h3 className="degrees">{result[5]}</h3>
                    <canvas height="32" width="32" id="cloudy"></canvas>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

//Map state to properties which would be accessible by Weather component
function mapStateToProps(state){
  var data = state.auth.weatherdata;
  var weatherData = [];
  if (data) {
    weatherData = data;
  }
  return {weatherData: weatherData};
}

export default connect(mapStateToProps, actions)(Weather);
