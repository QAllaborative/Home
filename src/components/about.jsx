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
                    <p>I'm a <strong>Senior Software Developer Engineer in Testing</strong> from Argentina living in New Zealand and loving every aspect of it! After 5 years of working in the local scene, I've decided to put my expertise and knowledge as a service to deliver the best testing solutions for my clients by implementing and teaching QA engineering best practices.</p>
                    <p>As a professional consultant and coach <strong>based in the beautiful city of Wellington</strong>, I offer holistic Automation and Test Engineering services for projects and companies, big and small. As part of my consultancy work, I can perform audits to help enhance the Automation mahi for my clients, delivering test assets based on each particular need. </p>
                    <p>From setting the foundations of CI/CD pipelines with Jenkins or GitHub Actions, to building beautiful Grafana dashboards to show the performance of your application, I have implemented many custom solutions around the Test Engineering space and I can do the same for your team.</p>
                                        <p>Why QAllaborative you might wonder? Well, <strong>I believe that QA should be the collaboration during all the stages of the SDLC and everybody's responsibility!</strong></p>
                    <h2 className="colorlib-heading">Test Engineering services, no matter how small or big your project is.</h2>
                    <p>Do you have a web/mobile application in development? <strong>Did you know you can get feedback about the state of your app faster with Automation?</strong> Ship all the goodness your customers want without delay!</p>
                    <p>From the creation of robust and scalable frameworks for your team to use,<strong> to live dashboards with scheduled tests running right when you need them,</strong> make your Software Development Life Cycle as efficient as it can be.</p>
                    <p>Seamlessly integrate with your development team by using Cypress with JavaScript, or get a Selenium based framework for your test team to use, my test tools stack covers all the main technologies being used professionally.</p>
                    <p>I can assess and provide a <strong>quote</strong> to determine the best approach and implement the solution you need.</p>
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
