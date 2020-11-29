import CookieConsent from "react-cookie-consent";
import React, { Component } from 'react';

export default class CookiesConsent extends Component {
    render(){
        return(
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                cookieName="galletitasAutomation"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.{" "}
                
            </CookieConsent>
        )
    }
}