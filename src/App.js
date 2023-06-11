import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import Timeline from './components/timeline'
import Cookies from './components/Cookies'
import Calendly from './components/calendly'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Workshops from './components/workshops';
import About from './components/about'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar></Sidebar>
            <div id="colorlib-main">
              <Switch>
                <Route path="/workshops" component={Workshops} />
              </Switch>
              <Introduction></Introduction>
              <About></About>
              <Timeline></Timeline>
              <Calendly></Calendly>
              <Footer></Footer>
              <Cookies></Cookies>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
