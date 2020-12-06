import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Of some of my gigs!</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Automation Test Lead - New Zealand <span>2020-present</span></h2>
                        <p>Leading the Automation team and implementing new ways of working to achieve the goal of faster, more reliable test cycles <strong>within the insurance business</strong>. For this, Grafana, influxdB and JMeter were the tools I implemented in the Performance space, while moving the tests from Selenium to Cypress, adding them to the CI pipelines through Jenkins. Closely involved with the development and operations teams to boost their productivity throught the implementation of tools and practices.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Test Engineer - New Zealand <span>2017-2020</span></h2>
                        <p>Brought to New Zealand as a Test Engineering specialist, I started leading the central team <strong>at government agencies</strong> through their digital transformation. To accomplish this, I made big changes to the workflow, the CI processes with Jenkins, implementation of best practices at coding and testing level and coaching/teaching fresh starters as well as Test Analysts on site with great engagement and success.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Automation Tester - Argentina <span>2010-2017</span></h2>
                        <p>My first Automation adventure ever. I had to learn Coded UI on my free time to create a Proof of Concept that resulted in the biggest Automation team in Argentina for the company. Later, I would be involved in different internal projects creating frameworks and coaching about the best practices and ways of Automation for a diverse portfolio of internal and external projects such as <strong>complex project management software, time tracking applications, live betting systems and more.</strong></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Game Tester - Outsourcing US Testing <span>2008-2010</span></h2>
                        <p>While I was advancing on my career as a Geologist (surprised?) I started working in testing for several <strong>AAA titles from Pandemic, EA Sports, Bioware on platforms like PC, Nintendo Wii, Playstation 3, Xbox 360 and PSP</strong>. Compliance testing and ad-hoc were the two main techniques. This was my first step towards Software Testing.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
