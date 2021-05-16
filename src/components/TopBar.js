import React from 'react';
export default class TobBar extends React.Component {

    currentTime() {
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        return time
    }

    render() {


        return (
            <div className="top-bar">
                <div className="left">
                    <div id="current-time">
                        <p>{this.currentTime()}</p>
                    </div>
                </div>
                <div className="right">
                    <ul className="top-bar-icons">
                        <li id="network"></li>
                        <li id="wifi"></li>
                        <li id="battery"></li>
                    </ul>
                </div>
            </div>
        )
    }
}