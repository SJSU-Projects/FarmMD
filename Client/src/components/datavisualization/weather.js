
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

var dayArray = {};
var temperatureValue = {};

class Weather extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dateObj: (new Date())
    };
  }

  componentDidMount(){
    var today;
    var cdate;
    this.props.fetchWeatherData();
    this.prepareWeatherData();
  }

  prepareWeatherData(){

    var today = new Date();
    var weatherResult = [];
    weatherResult = this.props.weatherData;
    var nextday;
    nextday = this.getnextday(1);
    var today = new Date();

    dayArray[0] = weekDay[today.getDay()];
    temperatureValue[0] = weatherResult[1]+1;

    nextday = this.getnextday(1);
    dayArray[1] = weekDay[nextday.getDay()];
    temperatureValue[1] = weatherResult[1];

    nextday = this.getnextday(2);
    dayArray[2] = weekDay[nextday.getDay()];
    temperatureValue[2] = weatherResult[2];

    nextday = this.getnextday(3);
    dayArray[3] = weekDay[nextday.getDay()];
    temperatureValue[3] = weatherResult[3];

    nextday = this.getnextday(4);
    dayArray[4] = weekDay[nextday.getDay()];
    temperatureValue[4] = weatherResult[4];

    nextday = this.getnextday(5);
    dayArray[5] = weekDay[nextday.getDay()];
    temperatureValue[5] = weatherResult[5];
  }

  getnextday(i){
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+i);
    return tomorrow;
  }

  render(){
    this.prepareWeatherData();
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
        <div className="temperature" id="currentday"><b></b>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-4">
      <div className="weather-icon">
        <img src="../../../../public/images/weather.png" alt="Logo" height="84" width="84"align="middle"></img>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="weather-text">
        <h2><i>Weather Forecast for this week</i></h2>
      </div>
    </div>
  </div>

  <div className="clearfix"></div>
  <div className="row weather-days">
    <div className="col-sm-2">
      <div className="daily-weather">
        <h2 className="day" id="dayone">{dayArray[0]}</h2>
        <h3 className="degrees" id="tempone">{temperatureValue[0]}</h3>
      </div>
    </div>
    <div className="col-sm-2">
      <div className="daily-weather">
        <h2 className="day" id="daytwo">{dayArray[1]}</h2>
        <h3 className="degrees" id="temptwo">{temperatureValue[1]}</h3>
      </div>
    </div>
    <div className="col-sm-2">
      <div className="daily-weather">
        <h2 className="day" id="daythree">{dayArray[2]}</h2>
        <h3 className="degrees" id="tempthree">{temperatureValue[2]}</h3>
      </div>
    </div>
    <div className="col-sm-2">
      <div className="daily-weather">
        <h2 className="day" id="dayfour">{dayArray[3]}</h2>
        <h3 className="degrees" id="tempfour">{temperatureValue[3]}</h3>
      </div>
    </div>
    <div className="col-sm-2">
      <div className="daily-weather">
        <h2 className="day" id="dayfive">{dayArray[4]}</h2>
        <h3 className="degrees" id="tempfive">{temperatureValue[4]}</h3>
      </div>
    </div>
    <div className="col-sm-2">
      <div className="daily-weather">
        <h2 className="day" id="daysix">{dayArray[5]}</h2>
        <h3 className="degrees" id="tempsix">{temperatureValue[5]}</h3>
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
  //Get the results
  if (data) {
    weatherData = data;
  }
  return {weatherData: weatherData};
}

//Connect to redux store to get the data
export default connect(mapStateToProps, actions)(Weather);
