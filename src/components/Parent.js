import React, { useEffect, useState } from 'react';
import Child from './Child';
import './style/Common.css';

function Parent() {
  const [data, setData] = useState([]);
  const [hidden, setHidden] = useState([]);
  const url = 'https://okrcentral.github.io/sample-okrs/db.json';
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(r => {
        setData(r.data);
      });
  }, []);
  const handleObjectiveClick = value => {
    if (hidden.includes(value)) {
      setHidden(prevState => {
        var index = prevState.indexOf(value);
        if (index !== -1) {
          prevState.splice(index, 1);
        }
        return [...prevState];
      });
    } else {
      setHidden(prevState => {
        return [...prevState, value];
      });
    }
  };
  return (
    <div>
      <ol>
        {data
          .filter(item => item.parent_objective_id === '')
          .map(category => (
            <div key={category.id}>
              <div className="container">
                <i
                  className="material-icons"
                  onClick={() => handleObjectiveClick(category.id)}
                >
                  {hidden.includes(category.id)
                    ? 'keyboard_arrow_right'
                    : 'keyboard_arrow_down'}
                </i>
                <i className="material-icons">person</i>
                <li id={category.id}>{category.title}</li>
              </div>
              {hidden.includes(category.id) ? null : (
                <Child category={category.id} data={data} />
              )}
            </div>
          ))}
      </ol>
    </div>
  );
}

export default Parent;
