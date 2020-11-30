import CookieConsent from "react-cookie-consent";
import React, { Component } from 'react';

export default class CookiesConsent extends Component {
    render(){
        return(
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                cookieName="galletitasAutomation"
                enableDeclineButton= "true"
                declineButtonText= "I decline"
                contentStyle={{flex: "0 0 100%", textAlign: "center"}}
                style={{ 
                    background: "#2B373B",
                    position: "fixed",
                    width: "100%",
                    justifyContent: "center",
                    zIndex: "999",
                }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px", marginTop: "0px" }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.{" "}
                
            </CookieConsent>
        )
    }
}