import{
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_SENSORDATA,
  FETCH_SENSORDETAILS,
  FETCH_WEATHERDATA
}from '../actions/types';

//Define reducer state updations when different actions are performed
export default function(state = {}, action){
  switch(action.type){
    case AUTH_USER:
      return {...state, error:"", authenticated: true};
    case UNAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_ERROR:
      return{...state, error: action.payload};
    case FETCH_MESSAGE:
      return{...state, message: action.payload};
    case FETCH_SENSORDATA:
      return{...state, data: action.payload};
    case FETCH_SENSORDETAILS:
      return{...state, sensordetails: action.payload};
    case FETCH_WEATHERDATA:
      return{...state, weatherdata: action.payload};
  }
  return state;
}
