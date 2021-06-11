/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/logo.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">QAllaborative</a></h1>
              <span className="email"><i className="fa fa-map-marker"> Wellington, New Zealand</i></span><br></br>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://twitter.com/RangeTester" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.linkedin.com/company/qallaborative" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/thefreerangetester" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://blog.testproject.io/author/thefreerangetestergmail-com/" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                Made in NZ by an imported latino<i className="icon-heart" aria-hidden="true" /><i className="icon-coffee" aria-hidden="true"></i><br></br>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
