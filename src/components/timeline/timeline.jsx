import React, { Component } from 'react'
import './timeline.css';


export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My background</span>
                <h2 className="colorlib-heading animate-box">Some of my projects and responsibilities</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-7">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Automation Test Lead <span>2023-2023</span></h2>
                        <p>A complex project with AI, AWS and a Front and Back End that needed a whole new <strong>Test and Automation Strategy</strong>. Playwright and Python were the main tools used to cover both <strong>E2E Testing, API Testing and AWS components</strong> such as lambdas, needing the processment of xml templates. A regression and smoke test suite were created and executed on demand in ADO Pipelines</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Lead Test Engineer - New Zealand <span>2022-2023</span></h2>
                        <p>Enabling a better and stronger QA throught the whole SDLC by implementing automation of processes and leading by example while <strong>mentoring and ramping up the test and dev teams</strong>. Designing better test plans with the use of Black and White Box testing techniques and automating with Cypress.io for better Azure DevOps pipelines.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Automation Test Lead - New Zealand <span>2021-2022</span></h2>
                        <p>Working on Data Warehousing <strong>ETL Testing as a Test Lead on the banking industry</strong>. The focus on this project is to train teams as well as finding opportunities to enhance the current workflow from story mapping to pipeline orchestration. Tools used: SQL, Jenkins, Bitbucket, Artifactory, Groovy and Gradle.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Automation Test Lead - New Zealand <span>2020-2021</span></h2>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
