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
                    <span className="heading-meta">Who am I?</span>
                    <h2 className="colorlib-heading">Helping you achieve your software quality goals</h2>
                    <p>I am Patricio Miner, a <strong>Senior Software Developer Engineer in Test</strong> from Argentina 🇦🇷, living in New Zealand 🇳🇿 and loving it! After five years of working in the local scene, I've put my expertise and knowledge as a service to deliver the best training and mentorships for local professionals looking to up or re-skill.</p>                  
                    <p>As a professional consultant and coach based in the beautiful city of Wellington, I offer holistic 🤖 <strong>Automation and Test Engineering</strong> mentoring through workshops, webinars and private classes to anyone, new or seasoned professionals, interested in testing. I have vast experience teaching the most demanded tools in the market and the best practices and processes any good tester should be familiar with.</p>
                    <p>I've been 🧑🏻‍💻 mentoring the Spanish-speaking community for the last five years through courses, webinars, and thousands of students and companies using my training for their teams through Udemy Business. <strong>Now it is time for our community in New Zealand to shine</strong> and generate the pool of professionals the market demands (and will continue to increase in demand)</p>
                    <p>From building automation frameworks from scratch with Selenium and Cucumber to API Automation, E2E Automation with Cypress and Playwright to setting the foundations of CI/CD pipelines with Jenkins, Azure DevOps or GitHub Actions, and I can teach you how to do it.</p>
                    <p><strong>Why the name QAllaborative</strong>, you might wonder? Well, I believe that QA should be the collaboration during all the stages of the SDLC and everybody's responsibility, something I strongly emphasize during my mentorship and a mindset you will adopt as a student!</p>
                    <h2 className="colorlib-heading">Where can you start learning?</h2>
                    <p>Here are a couple of options for you to consider. You can start by arranging a catchup with me to see where you are at with your testing skills (don't be afraid if you are new to testing!). Feel free to schedule a session by using the <strong>Let's have a catchup</strong> button</p>
                    <p>If you want to come and join a group of friendly people talking and learning about testing, feel free to check our <strong>Meetup group</strong> by clicking on the side panel, where you can find the <strong>Meetup icon</strong></p>
                    <p>You may already know what tool you want to learn. <strong>Or you may be in a role that requires you to understand a particular technology</strong>🚀. Let's discuss my private classes so you can nail it at your job!</p>
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
                <span className="heading-meta">How can I help you?</span>
                <h2 className="colorlib-heading">Knowledge as a Service</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="fa fa-bug" />
                </span>
                <div className="desc" data-animate-effect="fadeInLeft">
                    <h3>E2E Automation</h3>
                    <p>No matter what your requirements are, I can do it. More than 10 years developing Test solutions using JavaScript, C#, Java/Groovy and Python with the main tools in the market, such as Selenium, PyTest, RestAssured, Cypress and more gives me flexibility to implement solutions.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="fa fa-cogs" />
                </span>
                <div className="desc" data-animate-effect="fadeInTop">
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
                <div className="desc" data-animate-effect="fadeInBottom">
                    <h3>Test Automation audits</h3>
                    <p>An initial assessment will provide you with the information needed and actionable items to take your test team in the right direction. From the planning to the execution, I deliver everything your team needs to start adding value and not just maintaining scripts. Avoid the pitfalls!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc" data-animate-effect="fadeInRight">
                    <h3>Test Engineering workshops</h3>
                    <p>Need to skill up your teams? Or maybe train people in your company? We can arrange a set of workshops onsite to provide real world education and training for your resources. Contact me and lets talk about what's your current status, your expected one and get your testing work to the next level! </p>
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
                    <p>If you are looking for a new job and you are currently a Tester (or even if you are not!), let's talk about your next steps! More than 8 years of experience doing technical interviews for technical roles in testing gave me the knowledge to help you find your passion through real actions and expertise!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="fa icon-group" />
                </span>
                <div className="desc">
                    <h3>On site training for teams</h3>
                    <p>Avoid the common mistakes and pitfalls that lurk around every automation project. Get your team up and running, ready to work with the best practices, solid frameworks and robust workflows to start delivering automation greatness today! There is always a way to make things right!</p>
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
