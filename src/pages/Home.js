import React from 'react';
import BottomBar from '../components/BottomBar';
export default class Home extends React.Component {
    navigateToContactsPage(e) {
        e.preventDefault();
        document.location.pathname = '/contacts'
    }
    render() {
        return (

            <div className="shoutouts-container phone-inner home-screen">
                <BottomBar />
            </div>
        )
    }
}