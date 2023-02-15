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
              <div className="author-img" style={{ backgroundImage: 'url(images/QAllaborative_logo_2_png.png)',
              width:'100%',
              height:'200px'}} />
              <h1 id="colorlib-logo"><a href="index.html">QAllaborative</a></h1>
              <span className="email"><i className="fa fa-map-marker"> Wellington, New Zealand</i></span><br></br>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Background</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.meetup.com/en-AU/software-test-engineering-mentoring-group/" target="_blank" rel="noopener noreferrer"><i className="fa fa-meetup fa-4x" /></a></li>
                <li><a href="https://www.linkedin.com/company/qallaborative/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin fa-3x" /></a></li>
                <li><a href="https://discord.gg/PasqueYu2E" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-discord fa-3x" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                <a href="mailto:patominer@gmail.com">E-mail</a>
              </small></p>
              <p><small>
                Made in 🇳🇿 by an imported 🇦🇷<br></br>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
