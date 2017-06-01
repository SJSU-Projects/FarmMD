import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
var axios = require('axios');


class Topology extends Component {

  componentDidMount(){
    this.props.fetchSensorDetails();
    drawTopology(this);
  }

  render() {
    return(<div ref='topology'></div>);
  }
}

//Draw topology using 'next' framework
function drawTopology(thisRef){
  var topologyData= {
  };
  var flag = 0;
  var topo;
  var sensorInfo;

  setInterval(function () {
    var links = [];
    var nodes = [];
    var count = 50;
    var nodesObject = new Object();
    nodesObject["name"] = "Gateway";
    nodesObject["x"] = 400;
    nodesObject["y"] = 100;
    nodesObject["device_type"] = "router";
    nodes.push(nodesObject);

    var i =0;

    var datares;
    var sensorData = thisRef.props.sensorData;
    if(thisRef.props.sensorDetails.length > 0){
      datares = thisRef.props.sensorDetails;

      for (i = 0; i < datares.length; i++) {
        var nodesObject = new Object();
        var linksObject = new Object();
        nodesObject["id"] = datares[i].doc.SensorID;
        nodesObject["name"] = "Sensor" + datares[i].doc.SensorID;
        nodesObject["Latitude"] = datares[i].doc.Latitude;
        nodesObject["Longitude"] = datares[i].doc.Longitude;
        nodesObject["x"] = 660 - count;
        count = count + 150;
        nodesObject["y"] = count;
        nodesObject["device_type"] = "server";
        nodes.push(nodesObject);
        linksObject["source"] = i;
        linksObject["target"] = 0;
        links.push(linksObject);
      }
    }
    var linksObject = new Object();
    linksObject["source"] = i;
    linksObject["target"] = 0;
    links.push(linksObject);

    topologyData.nodes = nodes;
    topologyData.links = links;
    draw();
  }, 10000);

  function draw() {
    (function(nx) {
      /**
      * define application
      */
      var Shell = nx.define(nx.ui.Application, {
        methods: {
          start: function() {
            //your application main entry

            if(flag==0){
              // initialize a topology
              topo = new nx.graphic.Topology({
                // set the topology view's with and height
                width: 1000,
                height: 580,
                // node config
                nodeConfig: {
                  // label display name from of node's model, could change to 'model.id' to show id
                  label: 'model.name',
                  iconType: 'model.device_type'
                },
                // link config
                linkConfig: {
                  // multiple link type is curve, could change to 'parallel' to use parallel link
                  linkType: 'curve'
                },

                /*nodeSetConfig: {
                label: 'model.id',
                iconType: 'model.iconType'
                },*/
                // show node's icon, could change to false to show dot
                showIcon: true
              });
              flag = 1;
            }
            //set data to topology
            topo.data(topologyData);
            //attach topology to document
            topo.attach(this);
          }
        }
      });

      /**
      * create application instance
      */
      var shell = new Shell();

      /**
      * invoke start method
      */
      shell.start();
    })(nx);
  }
}

//Map state to properties which would be accessible by Topology component
function mapStateToProps(state){
  let sensorDetails = [];
  let sensorData = [];

  if(state.auth.sensordetails){
    sensorDetails = state.auth.sensordetails.rows;
  }

  var data = state.auth.data;
  if (data) {
    var n = data.rows.length;
    sensorData = [
      data.rows[n - 1].doc.data.temperature,
      data.rows[n - 1].doc.data.moisture,
      data.rows[n - 1].doc.data.salinity,
      data.rows[n - 1].doc.data.humidity
    ];
  }

  return {sensorData: sensorData, sensorDetails:sensorDetails};
}

//Connect to redux store to get the data
export default connect(mapStateToProps, actions)(Topology);
