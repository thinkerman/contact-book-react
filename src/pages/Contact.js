import React from 'react';
import { Link } from 'react-router-dom';
export default class ContactBook extends React.Component {


    state = {
        contacts: [],
        loading: true
    }

    navigateBackToContacts() {
        window.history.back();
    }
    componentDidMount() {

        fetch('http://localhost:8080/all')
            .then((response) => response.json())
            .then(data => {
                this.setState({ contacts: data })
            });
    }

    render() {
        return (
            <div className="shoutouts-container">
                <div className="icons-container">
                    <div className="left" onClick={this.navigateBackToContacts}>
                        <div></div>
                        <div>Home</div>
                    </div>
                    <div className="right">
                        <div></div>
                        <Link to='/add'>
                            <div id="add-contact">+</div>
                        </Link>
                    </div>
                </div>

                <div className="shoutouts-inner">

                    <h3>Contacts</h3>
                    <input type="text" name="" id="" placeholder="Search" />

                    {this.state.contacts.map((contact) => (
                        <div className="single-message" key={contact.id}>
                            <div className="message">
                                <div className="message-details">
                                    <div className="sender-details">
                                        <Link to={'/contact/?id=' + contact.id}>
                                            <div>{contact.fname + "  " + contact.lname}</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }


}