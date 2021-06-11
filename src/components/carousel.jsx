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
                    <img src='images/logo.jpg' alt="cosos" />
                    <div className="myCarousel">
                        <h3>Jeco</h3>
                        <h4>Senior dB Developer at BNZ</h4>
                        <p>
                            One of the best testers I've worked with.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="images/img-4.jpg" alt="algo" />
                    <div className="myCarousel">
                        <h3>Raul Sebastian</h3>
                        <h4>Student from Udemy</h4>
                        <p>
                            Excellent! He teaches really well and you can notice he knows a lot about what he is talking about.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="images/img-5.jpg" alt="una imagen" />
                    <div className="myCarousel">
                        <h3>Edwyn</h3>
                        <h4>Test Manager at Accenture</h4>
                        <p>
                            It was a pleasure working with him. He got the "At the very top" annual review on his first project with me!
                        </p>
                    </div>
                </div>
            </Carousel>
        )
    }
}
