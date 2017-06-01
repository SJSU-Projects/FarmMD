import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE,
         FETCH_SENSORDATA, FETCH_SENSORDETAILS, FETCH_WEATHERDATA } from './types';
import { queryString } from 'querystring';

const ROOT_URL = 'http://localhost:3000';
const sensorurl = `${ROOT_URL}/realtimedata`;
const sensordetailsurl = `${ROOT_URL}/sensordetails`;
const weatherdataurl = `${ROOT_URL}/weatherdata`;

//Display auth error
function authError(error){
  console.log('Auth error dispatched..');
 return{
   type: AUTH_ERROR,
   payload: error
 };
}

//Action to fetch weather data
export function fetchWeatherData(){
  return function(dispatch){
    axios.get(weatherdataurl)
    .then(response =>{
      var result = response;
      dispatch({
        type: FETCH_WEATHERDATA,
        payload: response.data
      });
    });
  }
}

//Action to fetch sensor details
export function fetchSensorDetails(){
  return function(dispatch){
    axios.get(sensordetailsurl)
    .then(response =>{
      var result = response;
      dispatch({
        type: FETCH_SENSORDETAILS,
        payload: response.data
      });
    });
  }
}

//Action to fetch sensor real time data
export function fetchSensordata(){
  return function(dispatch){
    axios.get(sensorurl)
    .then(response =>{
      var result = response;
      dispatch({
        type: FETCH_SENSORDATA,
        payload: response.data
      });
    });
  }
}

//Action to fetch message
export function fetchMessage(){
  return function(dispatch){
    axios.get(ROOT_URL, {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response=>{
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      });
    });
  }
}

//Post the data to Sign up user
export function signupUser({email, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, {email,password})
    .then(response => {
      dispatch({ type: AUTH_USER });
      //Save the token to localStorage
      localStorage.setItem('token', response.data.token);
      //Push user to sign in with new credentials
      browserHistory.push('/signin');
    })
    .catch(response => {
      console.log('Error found!');
      dispatch(authError(response.data))});
  }
}

export function signoutUser(){
  //Delete token from localStorage
  localStorage.removeItem('token');
  browserHistory.push('/signin');
  //Set authetication flag = false
  return { type: UNAUTH_USER };
}

//Post the data and sign in user by returning the token
export function signinUser({ email, password }){
  return function(dispatch){
      //Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password})
    .then(response => {

      //If request is good...
      //-update state to indicate user is authenticated
      //- Save JWT
      //-redirect to the route '/home'
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token',response.data.token);
      browserHistory.push('/home');
    })
    .catch(() => {
      //If request is bad
      //show error
      dispatch(authError('Bad Login Info'));
    });
  }
}
