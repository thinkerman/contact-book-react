import React from 'react';
const axios = require('axios');

export default class ContactBook extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            p_code: '',
            country: '',
            street_address: '',
            province: '',
            contact_group: ''

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    navigateBackToContacts() {
        window.history.back();
    }



    handleChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    }

    handleSubmit() {
        axios.post('http://localhost:8080/add', {}, {
            params: {
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                p_code: this.state.p_code,
                street_address: this.state.street_address,
                province: this.state.province,
                country: this.state.country,
                contact_group: this.state.contact_group
            }
        })
            .then(response => {

                alert('Contact added!');

            }).catch(error => {
                console.dir(error)
            })

    }

    render() {
        return (
            <div className="shoutouts-container">
                <div className="icons-container">
                    <div className="left">
                        <div></div>
                        <div onClick={this.navigateBackToContacts}> Contacts</div>
                    </div>
                    <div className="right">
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="shoutouts-inner" onClick={this.handleChange}>
                    <h3>Add Contact</h3>
                    <div>
                        <label>First name: <input type="text" value={this.state.fname.trim()} name="fname" onChange={this.handleChange} /></label>
                        <label>Last name: <input type="text" value={this.state.lname.trim()} name="lname" onChange={this.handleChange} /></label>
                        <label>Email: <input type="text" value={this.state.email.trim()} name="email" onChange={this.handleChange} /></label>

                        <label>Address</label>
                        <hr></hr>
                        <label>Street: <input type="text" value={this.state.street_address.trim()} name="street_address" onChange={this.handleChange} /></label>
                        <label>Post Code: <input type="text" value={this.state.p_code.trim()} name="p_code" onChange={this.handleChange} /></label>
                        <label>Province: <input type="text" value={this.state.province.trim()} name="province" onChange={this.handleChange} /></label>
                        <label>Country: <input type="text" value={this.state.country.trim()} name="country" onChange={this.handleChange} /></label>
                        <p></p>
                        <hr></hr>
                        <label>Group:
                            <input type="text" value={this.state.contact_group.trim()} name="contact_group" onChange={this.handleChange} /></label>
                        <p style={{ textAlign: "center" }}><input type="button" value="Add User" onClick={this.handleSubmit} /></p>

                    </div>
                </div>
            </div>
        )
    }


}