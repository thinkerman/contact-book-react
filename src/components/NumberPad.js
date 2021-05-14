import React from 'react';

export default class NumberPad extends React.Component {
    constructor() {
        super();
        this.numberClick = this.numberClick.bind(this);
        this.state = {
            passcode: []
        }
    }

    numberClick(e) {
        e.preventDefault();

        if (this.state.passcode.length <= 3) {
            this.state.passcode.push(e.target.getAttribute("data-value"));
        }

        switch (this.state.passcode.length) {
            case 1:
                document.querySelector('#first-digit').classList.add('selected');
                break;
            case 2:
                document.querySelector('#second-digit').classList.add('selected');
                break;
            case 3:
                document.querySelector('#third-digit').classList.add('selected');
                break;
            case 4:
                document.querySelector('#fourth-digit').classList.add('selected');
                let enteredPin = this.state.passcode.toString();
                if (enteredPin === '1,1,1,1') {
                    document.location.pathname = '/home';
                } else {


                    document.querySelector('#first-digit').classList.remove('selected');
                    document.querySelector('#second-digit').classList.remove('selected');
                    document.querySelector('#third-digit').classList.remove('selected');
                    document.querySelector('#fourth-digit').classList.remove('selected');
                    this.setState({
                        passcode: []
                    })
                }

                break;
            default:
                let defaultCase = null;

        }
        console.log(this.state.passcode)
    }



    render() {
        return (
            <div className="phone-inner-lockscreen">
                <div className="phone-inner-container">
                    <div className="lock-status"></div>
                    <div className="lockscreen-time"><h1>23:07</h1></div>
                    <div className="lockscreen-day">Wednesday, 12 May</div>
                </div>
                <div id="number-pad">
                    <div id="indicator">
                        <ul>
                            <li id="first-digit"></li>
                            <li id="second-digit"></li>
                            <li id="third-digit"></li>
                            <li id="fourth-digit"></li>
                        </ul>
                    </div>
                    <div id="numbers">
                        <ul>

                            <li className="number" onClick={this.numberClick}>
                                <div>
                                    <h1 className="digit single" data-value="1">1</h1>
                                </div>
                            </li>
                            <li className="number" onClick={this.numberClick}>
                                <div>
                                    <h1 className="digit" data-value="2">2</h1>
                                    <p className="alphabets" data-value="2">ABC</p>
                                </div>
                            </li>
                            <li className="number" onClick={this.numberClick}>
                                <div>
                                    <h1 className="digit" data-value="3">3</h1>
                                    <p className="alphabets" data-value="3">DEF</p>
                                </div>
                            </li>
                            <li className="number" onClick={this.numberClick}>
                                <div>
                                    <h1 className="digit" data-value="4">4</h1>
                                    <p className="alphabets" data-value="4">GHI</p>
                                </div>
                            </li>
                            <li className="number" onClick={this.numberClick}>
                                <div>
                                    <h1 className="digit" data-value="5">5</h1>
                                    <p className="alphabets" data-value="5">JKL</p>
                                </div>
                            </li>
                            <li className="number" onClick={this.numberClick}>
                                <div>
                                    <h1 className="digit" data-value="6">6</h1>
                                    <p className="alphabets" data-value="6">MNO</p>
                                </div>
                            </li>
                            <li className="number" onClick={this.numberClick}>
                                <div>
                                    <h1 className="digit" data-value="7">7</h1>
                                    <p className="alphabets" data-value="7">PQR</p>
                                </div>
                            </li>
                            <li className="number" onClick={this.numberClick}>
                                <div>
                                    <h1 className="digit" data-value="8">8</h1>
                                    <p className="alphabets" data-value="8">STU</p>
                                </div>
                            </li>
                            <li className="number" onClick={this.numberClick}>
                                <div>
                                    <h1 className="digit" data-value="9">9</h1>
                                    <p className="alphabets" data-value="9" style={{ letterSpacing: '1px' }}>VWXYZ</p>
                                </div>
                            </li>
                            <li className="number" onClick={this.numberClick}>
                                <div>
                                    <h1 className="digit single" data-value="0">0</h1>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}