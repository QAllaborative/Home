import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Cookies from './components/Cookies'
import Calendly from './components/calendly'
import { BrowserRouter, Switch } from 'react-router-dom';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <Switch>
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          <Calendly></Calendly>
          <Footer></Footer>
          <Cookies></Cookies>
          	</div>
      	</div>
      </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
