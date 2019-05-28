import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => (
    <li>
    {props.itemValue}
    </li>
);

PropTypes.propTypes = {
    itemValue: PropTypes.string.isRequired
}

export default ListItem;