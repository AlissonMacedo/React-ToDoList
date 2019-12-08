import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
          <div className="items">
             <li >
                  <span>{tech}</span>
                  <button type="button" onClick={onDelete}>Remover</button>
             </li>
          </div>
  );
}
/**
TechItem.defaultProps = {
  tech: '',
}
 */

TechItem.PropTypes = { 
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
 }

export default TechItem;