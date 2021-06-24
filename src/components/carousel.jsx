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
                    <img src='images/BNZ.png' alt="Banking testimonial" />
                    <div className="myCarousel">
                        <h3>J.J</h3>
                        <h4>Senior Oracle Developer</h4>
                        <p>
                            One of the best testers I've worked with.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="images/Udemy.jpeg" alt="Udemy student" />
                    <div className="myCarousel">
                        <h3>Raul</h3>
                        <h4>Student from Udemy</h4>
                        <p>
                            Excellent! He has the ability to explain complicated concepts in simple ways.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="images/Accenture.jpg" alt="Accenture" />
                    <div className="myCarousel">
                        <h3>Edwyn</h3>
                        <h4>Test Manager at Accenture</h4>
                        <p>
                            One of my top testers, which started the biggest automation project at that time in our branch.
                        </p>
                    </div>
                </div>
            </Carousel>
        )
    }
}
