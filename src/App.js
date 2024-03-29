import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar'
import Introduction from './components/introduction'
import Timeline from './components/timeline/timeline'
import Calendly from './components/calendly'
import About from './components/about/about'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
            <Calendly></Calendly>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
