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

    navigateBackToContacts() {
        window.history.back();
    }

    updateContactDetails() {
        axios.post('http://localhost:8080/update', {}, {
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

        axios.post('http://localhost:8080/remove', {}, {
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

        axios.get(`http://localhost:8080/contact`, { params: { id: document.location.search.split('=')[1] } })
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
                        <div>Contact</div>
                    </div>
                    <div className="right">
                        <div></div>
                        <div id="delete-contact" onClick={this.deleteContact}>--</div>

                    </div>
                </div>
                <div className="shoutouts-inner">
                    {
                        this.state.contactData ? (
                            <div>
                                <p>First name :<label> {this.state.contactData.fname.trim()} </label></p>
                                <p>Last name : <label>{this.state.contactData.lname.trim()}</label></p>
                                <p>Email: <label>{this.state.contactData.email.trim()}</label></p>
                                <hr></hr>
                                <p>Street : <label>{this.state.contactData.street_address.trim()}</label></p>
                                <p>Post Code : <label>{this.state.contactData.p_code.trim()}</label></p>
                                <p>Province : <label>{this.state.contactData.province.trim()}</label></p>
                                <p>Country : <label>{this.state.contactData.country.trim()}</label></p>
                                <hr></hr>
                                <p>Group : <label>{this.state.contactData.contact_group.trim()}</label></p>





                            </div>
                        ) : <p>User not found!</p>
                    }

                </div>
            </div>
        )
    }


}