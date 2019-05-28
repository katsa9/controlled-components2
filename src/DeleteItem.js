import React from 'react';
import PropTypes from 'prop-types';

const DeleteItem = (props) => (
    <button onClick={props.deleteLast} disabled={props.noItems()}>
          Delete Last Item
    </button>
);

PropTypes.propTypes = {
    deleteLast: PropTypes.func.isRequired,
    noItems: PropTypes.func.isRequired
}

export default DeleteItem;