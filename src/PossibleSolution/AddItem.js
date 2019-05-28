import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItem extends Component {
    static propTypes = {
        onAdd: PropTypes.func.isRequired
    }

    state = {
        value: ''
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    render() {
        return (
            <form onSubmit={this.props.onAdd}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button type="submit" disabled={this.inputIsEmpty()}>Add</button>
            </form>
        );
    }
}

export default AddItem;