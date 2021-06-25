import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Testimonials extends Component {
    render() {
        return (

            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div>
                    <div className="myCarousel">
                        <h3>J.J</h3>
                        <h4>Senior Oracle Developer</h4>
                        <p>
                            When he joined the project, he was quick assessing the bottlenecks and knowledge gaps and implemented a new way of working on testing and doing automation, while training two manual testers.
                            He also made Performance Testing much visible and better by implementing a solution with JMeter and Grafana!
                        </p>
                    </div>
                </div>
                <div>
                    <div className="myCarousel">
                        <h3>Raul</h3>
                        <h4>Student from Udemy</h4>
                        <p>
                            The care he takes on each class and how easy he makes understanding complex concepts, makes him one of the Test Automation mentors I've ever had.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="myCarousel">
                        <h3>Edwyn</h3>
                        <h4>Automation Test Lead</h4>
                        <p>
                            One of my top testers, which started the biggest automation project at that time in our branch. He started with just a POC when he suggested automating the regression and it became a big, multicultural team that lasted for years.
                        </p>
                    </div>
                </div>
            </Carousel>
        )
    }
}
