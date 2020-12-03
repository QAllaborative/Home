/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/logo.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">QAllaborative</a></h1>
              <span className="email"><i className="icon-mail"><a href="https://us20.list-manage.com/contact-form?u=0973f39cd47ce2b3c15e3624f&form_id=dff50668299afab6ee222ae7081ef05a" target="_blank" rel="noopener noreferrer"> Contact us!</a></i></span>
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
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <h3 style={{width: '295px', textAlign: 'center'}}id="colorlib-logo">Upcoming workshops</h3>
            <div style={{width: '295px', textAlign: 'center'}}><iframe src="https://www.eventbrite.co.nz/calendar-widget?eid=127808698257&showPrivate=1&sig=AGbIMNx16l77sf2ezOCT6nxSX7356MeF9g" frameBorder={0} height={534} width={195} marginHeight={0} marginWidth={0} scrolling="no" allowTransparency="true" /></div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/pateeto.miner" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/RangeTester" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.linkedin.com/company/qallaborative" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/thefreerangetester" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://blog.testproject.io/author/thefreerangetestergmail-com/" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-coffee" aria-hidden="true"></i><br></br>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
