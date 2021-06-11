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
                    <img src="public/images/img-6.jpg" alt="" />
                    <div className="myCarousel">
                        <h3>John Ham</h3>
                        <h4>Designer at Somewhere</h4>
                        <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="public/images/img-4.jpg" alt="" />
                    <div className="myCarousel">
                        <h3>J R</h3>
                        <h4>Student at Victoria University</h4>
                        <p>
                            Really good trainings and courses to get into the Testing market.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="public/images/img-5.jpg" alt="" />
                    <div className="myCarousel">
                        <h3>Tu vieja</h3>
                        <h4>Designer</h4>
                        <p>
                            I have only good things to say about this project.
                        </p>
                    </div>
                </div>
            </Carousel>
        )
    }
}
