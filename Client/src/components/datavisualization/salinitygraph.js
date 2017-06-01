import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

var LineChart = require('react-chartjs').Bar;
var axios = require('axios');

//Define border color.
const bgcolor = [
  'rgba(255,99,132,1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
];

//Define background color
const backgroundColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)'
];

//Define chartOptions
const chartOptions =  {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
};

class Graph extends Component {

  componentDidMount(){
    this.props.fetchSensordata();
  }

  render() {
    var chartData = {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [{
        label: '# of Votes',
        data: this.props.sensorData,
        backgroundColor: backgroundColor,
        borderColor: bgcolor,
        borderWidth: 1
      }]
    };
    return (
      <LineChart data={chartData} options={chartOptions} width={700}
        height={200}/>
    );
  }
}

//Map state to properties which would be accessible by Graph component
function mapStateToProps(state){
  var data = state.auth.data;
  let sensorData = [];
  if (data) {
    var n = data.rows.length;
    sensorData = [
      data.rows[n - 7].doc.data.salinity,
      data.rows[n - 100].doc.data.salinity,
      data.rows[n - 200].doc.data.salinity,
      data.rows[n - 500].doc.data.salinity,
      data.rows[n - 1000].doc.data.salinity,
      data.rows[n - 1200].doc.data.salinity,
      data.rows[n - 1100].doc.data.salinity,
    ];
  }
  return {sensorData: sensorData};
}

//Connect to redux store to get the data
export default connect(mapStateToProps, actions)(Graph);
