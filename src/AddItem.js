import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItem extends Component {
    static propTypes = {
        onAddItem: PropTypes.func.isRequired
    }

    state = {
        value: ''
    }

    addItem = event => {
        event.preventDefault();
        console.log("before callback", this.state.value);
        this.props.onAddItem(this.state.value); //callback for parent comp
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    render() {
        return (
            <form onSubmit={this.addItem}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button disabled={this.inputIsEmpty()}>Add</button>
            </form>
        );
    }
}

export default AddItem;