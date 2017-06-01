import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';
import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Topology from './components/datavisualization/topology';
import Home from './components/home';
import RequireAuth from './components/auth/requireAuth';
import Weather from './components/datavisualization/weather'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store =createStoreWithMiddleware(reducers);

//If token exist, user is authenticated already
const token = localStorage.getItem('token');
if(token){
  store.dispatch({ type: AUTH_USER });
  //browserHistory.push('/home');
}

//Render routes main page
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin}/>
        <Route path="signout" component={Signout}/>
        <Route path="signup" component={Signup}/>
        <Route path="home" component={Home}/>
        <Route path="topology" component={Topology}/>
      </Route>
    </Router>
  </Provider>
  ,document.getElementById('main_container'));
