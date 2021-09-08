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
                prefill={{
                    customAnswers: {
                        a1: 'a1',
                        a10: 'a10',
                        a2: 'a2',
                        a3: 'a3',
                        a4: 'a4',
                        a5: 'a5',
                        a6: 'a6',
                        a7: 'a7',
                        a8: 'a8',
                        a9: 'a9'
                    },
                    date: new Date('2021-09-09T03:04:54.966Z'),
                    email: 'test@test.com',
                    firstName: 'Jon',
                    guests: [
                        'janedoe@example.com',
                        'johndoe@example.com'
                    ],
                    lastName: 'Snow',
                    name: 'Jon Snow'
                }}
                styles={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "grey"
                }}
                text="Let's connect!"
                url="https://calendly.com/thefreerangetester"
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
