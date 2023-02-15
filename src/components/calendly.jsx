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
                text="Workshops"
                url="https://calendly.com/qallaborative"
                utm={{
                    utmCampaign: 'Test Engineering Workshops',
                    utmContent: 'Automation Testing',
                    utmMedium: 'Ad',
                    utmSource: 'Facebook',
                    utmTerm: '2023'
                }}
            />
        </div>
    );
}
}
