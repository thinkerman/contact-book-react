import React from 'react';

export default class BottomBar extends React.Component {
    navigateToContactsPage(e) {
        e.preventDefault();
        document.location.pathname = '/contacts'
    }
    render() {
        return (

            <div className="bottom-bar">
                <div className="bottom-inner">

                    <div className="footer-icon" id="contacts" onClick={this.navigateToContactsPage}></div>
                    <div className="footer-icon" id="messages"></div>
                    <div className="footer-icon" id="gmail"></div>
                    <div className="footer-icon" id="safari"></div>
                </div>
            </div>

        )
    }
}