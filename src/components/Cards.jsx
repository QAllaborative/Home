import React, { Component } from 'react'
import Tarjeta1 from './Card1'
import Tarjeta2 from './Card2'
import Tarjeta3 from './Card3'
import Tarjeta4 from './Card4'
import Tarjeta5 from './Card5'
import Tarjeta6 from './Card6'

    export default class Cards extends Component {
        render() {
            return (
              <div>
        				<section className="colorlib-work" data-section="projects">
        					<div className="colorlib-narrow-content">
        						<div className="row">
        							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
        								<span className="heading-meta">Learn today</span>
        								<h2 className="colorlib-heading animate-box">Bootcamps</h2>
        							</div>
        						</div>
        						<div className="row">
        							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
        									<div className="desc">
        										<div className="con">
                                                <Tarjeta1></Tarjeta1>
        										</div>
        									</div>
        							        </div>
                                        <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
        									<div className="desc">
        										<div className="con">
                                                <Tarjeta2></Tarjeta2>
        										</div>
        									</div>
        							</div>
                                        <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
        									<div className="desc">
        										<div className="con">
                                                <Tarjeta3></Tarjeta3>
        										</div>
        									</div>
        							</div>	
        						</div>
        						<div className="row">
        							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
        									<div className="desc">
        										<div className="con">
                                                <Tarjeta4></Tarjeta4>
        										</div>
        									</div>
        							        </div>
                                        <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
        									<div className="desc">
        										<div className="con">
                                                <Tarjeta5></Tarjeta5>
        										</div>
        									</div>
        							</div>
                                        <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
        									<div className="desc">
        										<div className="con">
                                                <Tarjeta6></Tarjeta6>
        										</div>
        									</div>
        							</div>	
        						</div>
        					</div>
        				</section>
              </div>
            )
        }
      }
                            