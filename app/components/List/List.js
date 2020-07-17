import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const List = ({ component, items }) => {
  const ComponentToRender = component;
  let content = (<td></td>);

  // If we have items, render them
  if (items) {
    content = items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
	<div className="table-responsive">          
		<table className="table">
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Code</th>
				</tr>
			</thead>
			<tbody>
				{content}
			</tbody>
		</table>
	</div>
  );
};

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default List;
