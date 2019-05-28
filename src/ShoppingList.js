import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const ShoppingList = (props) => (
    <div>
        <p className="items">Items</p>
        <ol className="item-list">
            {props.items.map((item, index) => <ListItem key={index} itemValue={item}/>)}
        </ol>
    </div>
);

PropTypes.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ShoppingList;