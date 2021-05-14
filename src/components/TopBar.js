import React from 'react';
import wifiImage from '../assets/imgs/wifi.png';
import batteryImage from '../assets/imgs/battery.png';
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
                        <li style={{ backgroundImage: "url('" + wifiImage + "')", backgroundSize: "cover", backgroundPosition: "center" }}></li>
                        <li style={{ backgroundImage: "url('" + batteryImage + "')", backgroundSize: "cover", backgroundPosition: "center" }}></li>
                    </ul>
                </div>
            </div>
        )
    }
}