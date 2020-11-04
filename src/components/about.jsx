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
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Creating the pool of professionals New Zealand needs!</h2>
                    <p>I'm a Senior SDET from Argentina living in New Zealand and loving every aspect of it! After 3 years of working in the local scene, I've decided to put my expertise and knowledge as a service to deliver the best testing solutions and enable a fast paced workflow!</p>
                    <p>As a professional coach and consultant based in the beautiful city of Wellington, I teach the ways of Automation and Test Engineering, as well as perform audits and enhance the Automation mahi for my clients, leading by example! </p>
                    <p>Find which path of Software Testing you want to follow and grow your skills and experience with real world applications with my help. Test Analyst? Test Engineer? Performance Tester? All of them are excellent options to get into the market for job hunting!</p>
                    <p>Be ready to apply to highly demanded job positions with top notch benefits and salaries in New Zealand and the world! Want to know more about why working as a Tester is perfect for you? Check this <a href="https://www.careers.govt.nz/jobs-database/it-and-telecommunications/information-technology/test-analyst/about-the-job" target="_blank" rel="noopener noreferrer">link!</a></p>
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
                <span className="heading-meta">What I offer</span>
                <h2 className="colorlib-heading">Here are some of my services</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="fa fa-bug" />
                </span>
                <div className="desc">
                    <h3>E2E Automation </h3>
                    <p>No matter what your requirements are, I can do it. More than 10 years developing Test solutions using JavaScript, C#, Java/Groovy and Python with the main tools in the market, such as Selenium and Cucumber, PyTest, RestAssured, Cypress and more gives me a holistic view of what works.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="fa fa-cogs" />
                </span>
                <div className="desc">
                    <h3>Test Engineering</h3>
                    <p>From the analysis of what automation can do for you, to setting up the SCM and CI workflows on tools such as Github, Bitbucket, Jenkins and GitHub Actions, I deliver Test Engineering as a whole while following the best practices and enabling DevOps in your pipelines.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Test Automation audits.</h3>
                    <p>An initial assessment will provide you with the information needed and the next steps to take your test team in the right direction. From the planning to the execution, I deliver all your team need to start adding value and not just maintaining scripts. Avoid the pitfalls!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Test Engineering workshops</h3>
                    <p>With the right guidance you can be doing real world test automation following the best practices, here, in New Zealand and with someone assisting you! Check the calendar or contact me for more information about upcoming workshops and other options to get you or your team aboard! </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="fa fa-suitcase" />
                </span>
                <div className="desc">
                    <h3>Career counseling</h3>
                    <p>If you are looking for a new job and you are currently a Tester (or even if you are not!), I can provide assistance with your CV, next steps and learnings and how to look for the perfect new gig. 3 years of experience doing technical interviews in the country gave me the knowledge to help you find your passion!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="fa icon-group" />
                </span>
                <div className="desc">
                    <h3>On site training for teams.</h3>
                    <p>Avoid the common mistakes and pitfalls that lurk around every automation project. Get up and working with the best practices, solid frameworks and robust workflows to start delivering automation greatness today! Contact me to know about the options to get your team to the next automation level!</p>
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
