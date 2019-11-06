import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Router} from 'react-router';
import { Route, Switch, Redirect } from 'react-router';
import { NavLink, withRouter } from 'react-router-dom';
// import Test from './Test';
import Agenda from './Agenda';

const Test = React.lazy(() =>
  import('./Test'));

let App = (props) => {
  let myevent = () => {
    console.log("props....", props);

  }
  
  return (
    <React.Fragment>
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
            </div>
            <ul className="nav navbar-nav">
              <li><NavLink to={{ 'pathname': "/test", 'hash': '#xyz', 'search': '?name="rashmi"' }} activeClassName="active">Test</NavLink></li>
              <li><NavLink to="/agenda">Agenda</NavLink></li>
            </ul>
          </div>
        </nav>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path='/test' component={Test}></Route>
            <Route path='/agenda' component={Agenda}></Route>
            <Redirect to='/test' path='/redirect'></Redirect>
          </Switch>
        </Suspense>
        <button className="btn btn-primary btn" onClick={myevent}>change</button>
      </div>
    </React.Fragment>
  );
}

export default withRouter(App);
