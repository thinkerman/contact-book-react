import React from 'react';
import { Link } from 'react-router-dom';
export default class ContactBook extends React.Component {


    state = {
        contacts: [],
        loading: true
    }

    navigateBackToContacts(e) {
        e.preventDefault()
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
                    <a href="/" className="left" onClick={this.navigateBackToContacts}>
                        <div></div>

                        <div data-testid="home-button-test-id">Home</div>
                    </a>
                    <div className="right">
                        <div></div>
                        <Link to='/add'>

                            <input type="button" id="add-contact" value="Add" />
                        </Link>
                    </div>
                </div>

                <div className="shoutouts-inner">

                    <h3>Contacts</h3>

                    {this.state.contacts.map((contact) => (
                        <div className="single-message" key={contact.id}>
                            <div className="message">
                                <div className="message-details">
                                    <div className="sender-details">
                                        <Link to={'/contact/?id=' + contact.id}>
                                            <div><b>Name:</b>  {contact.fname + "  " + contact.lname}</div>
                                            <div><b>Email:</b> {contact.email}</div>
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