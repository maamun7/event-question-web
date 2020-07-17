import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ListItem = ({ item }) => (
   <tr> {item} </tr>
);

ListItem.propTypes = {
  item: PropTypes.any
};

export default ListItem;
