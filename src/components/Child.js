import React from 'react';
import './style/Common.css';

function Child({ category, data }) {
  return (
    <div className="child">
      <ol className="child_ol" type="a">
        {data
          .filter(item => item.parent_objective_id === category)
          .map(item => (
            <div className="container" key={item.id}>
              <i className="material-icons">person</i>
              <li className="item">{item.title}</li>
            </div>
          ))}
      </ol>
    </div>
  );
}

export default Child;
