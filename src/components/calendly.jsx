import React, { Component } from "react";
import { PopupWidget } from "react-calendly";

export default class Calendly extends Component {
    render(){
    return(
        <div className="App">
            <PopupWidget
                className=""
                pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideGdprBanner: true,
                    hideLandingPageDetails: false,
                    primaryColor: '00a2ff',
                    textColor: '4d5055'
                }}
                styles={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "grey"
                }}
                text="Let's connect!"
                url="https://calendly.com/qallaborative"
                utm={{
                    utmCampaign: 'Spring Sale 2019',
                    utmContent: 'Shoe and Shirts',
                    utmMedium: 'Ad',
                    utmSource: 'Facebook',
                    utmTerm: 'Spring'
                }}
            />
        </div>
    );
}
}
