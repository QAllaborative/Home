import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Creating the pool of professionals New Zealand needs!</h2>
                    <p>I'm a Senior SDET from Argentina living in New Zealand and loving every aspect of it! After 3 years of working in the local scene, I've decided to put my expertise and knowledge as a service to deliver the best testing solutions and enable a fast paced workflow!</p>
                    <p>I'm a professional coach and consultant based in the beautiful city of Wellington, where I teach the ways of Automation and Test Engineering, as well as audit and enhance the Automation mahi for my clients! </p>
                    <p>Monthly, I'm hosting Automation Bootcamps and Workshops both through online webinas and physically across New Zealand. Check below for more details about dates, prices and what you will be learning! </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my services</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-chart-bar" />
                </span>
                <div className="desc">
                    <h3>E2E Automation </h3>
                    <p>More than 10 years developing Test solutions and Automating test cases using JavaScript, C#, Java/Groovy and Python with tools like Selenium and Cucumber, PyTest, Katalon Studio, TestProject, Cypress and TestCafe.</p>
                    <p ><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Test Engineering</h3>
                    <p>I can build the whole Automation workflow from scratch and with different tools depending your needs. From frameworks for API Testing, to UI Automation, to the endgame of CI with Jenkins, Docker and dashboard tools for reporting.</p>
                    <p><a className="btn btn-primary btn-learn" href="https://github.com/thefreerangetester" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-eye" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Shifting the test approach left and right to have the right checks at the right time. From monitoring the use of Jenkins with Kibana, to display the user experience in Production with dashboards in Grafana, I can build the right tool for your DevOps testing needs.</p>
                    <p><a className="btn btn-primary btn-learn" href="https://www.eventbrite.co.nz/e/road-to-test-engineer-automation-and-performance-bootcamp-tickets-126480050235" target="_blank" rel="noopener noreferrer">Next Automation Bootcamp <i className="icon-book" /></a></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Teaching and career counsealing</h3>
                    <p>Helping New Zealand create the pool of engineers to cover the high demand. If you are looking for a new job to be passionate about, there is no better place to look at! </p>
                    <p><a className="btn btn-primary btn-learn" href="emailto:thefreerangetester@gmail.com" target="_blank" rel="noopener noreferrer">Send an email <i className="icon-briefcase3" /></a></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-check" />
                </span>
                <div className="desc">
                    <h3>Automation UI</h3>
                    <p>From PyTest for Python, to Selenium with Cucumber for Java, passing to Cypress, TestCafe, Katalon and TestProject, I'm constantly creating frameworks on different techstacks.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Automation API</h3>
                    <p>Following the best practices, I create solid frameworks for API Automation with Java and RestAssured, as well as Katalon, Postman, Karate and Request for Python.</p>
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
