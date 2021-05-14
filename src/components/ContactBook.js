import React from 'react';

export default class ContactBook extends React.Component {

    state = {
        loaded: false,
        contacts: []
    }

    componentDidMount() {

    }

    render() {
        return "Hello ContactBook"
    }
}