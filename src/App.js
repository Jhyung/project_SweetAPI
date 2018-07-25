import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header/Header';
import Initial from './initial/Initial';
import Profile from './profile/Profile';
import Board from './board/Board';
import Login from './initial/Login';
import Register from './initial/Register';

class App extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     email:'',
  //     menu:0
  //   }
  // }
  render() {
    // if(this.state.menu==0){
    //   return <div><Header/><Main/></div>
    // }
    // else if(this.state.menu==1){
    //   return <div><Header/><Register/></div>
    // }
    // else if(this.state.menu==2){
    //   return <div><Header/><Login/></div>
    // }
    // else {
    //   return <div><Header/>??</div>
    // }
    return (
      <div>
        <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <div>
            <Header/>
            <Switch>
              <Route exact path="/" component={Initial}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/board" component={Board}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
