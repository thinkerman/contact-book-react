import React from 'react';
const axios = require('axios');

export default class SingleContact extends React.Component {

    constructor() {
        super();

        this.state = {
            contactData: null,
            fname: '',
            lname: '',
            email: '',
            p_code: '',
            country: '',
            street_address: '',
            province: '',
            contact_group: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {

        const value = event.target.value;
        console.log(event.target.name)
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
        console.log(this.state)

    }

    navigateBackToContacts(e) {
        e.preventDefault();
        window.history.back();
    }

    updateContactDetails() {
        axios.post('https://api.ioschap.com/update', {}, {
            params: {
                id: document.location.search.split('=')[1],
                field: '',
                value: ''
            }
        })
            .then(response => {
                alert('Contact updated!');
            }).catch(error => {
                console.dir(error)
            })
    }

    deleteContact() {

        axios.post('https://api.ioschap.com/remove', {}, {
            params: {
                id: document.location.search.split('=')[1]
            }
        })
            .then(response => {
                alert('Contact removed!');
            }).catch(error => {
                console.dir(error)
            })
    }
    componentDidMount() {

        axios.get(`https://api.ioschap.com/contact`, { params: { id: document.location.search.split('=')[1] } })
            .then(response => {

                this.setState({ contactData: response.data[0] })
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        return (

            <div className="shoutouts-container">
                <div className="icons-container">
                    <div className="left" onClick={this.navigateBackToContacts}>
                        <div></div>
                        <div><a href="/">Contact</a></div>
                    </div>
                    <div className="right">
                        <div></div>
                        <input type="button" id="delete-contact" onClick={this.deleteContact} value="delete" />

                    </div>
                </div>
                <div className="shoutouts-inner">
                    {
                        this.state.contactData ? (
                            <div>
                                <p><label>First name : </label> {this.state.contactData.fname}</p>
                                <p><label>Last name :  </label>{this.state.contactData.lname}</p>
                                <p><label>Email:  </label>{this.state.contactData.email}</p>
                                <hr></hr>
                                <p><label>Street :  </label>{this.state.contactData.street_address}</p>
                                <p><label>Post Code :  </label>{this.state.contactData.p_code}</p>
                                <p><label>Province :  </label>{this.state.contactData.province}</p>
                                <p><label>Country :  </label>{this.state.contactData.country}</p>
                                <hr></hr>
                                <p><label>Group :</label> {this.state.contactData.contact_group}</p>
                            </div>
                        ) : <p>User not found!</p>
                    }

                </div>
            </div>
        )
    }


}