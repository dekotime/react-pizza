import React from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSetActiveItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>Все</li>
        {items &&
          items.map((elem, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              key={`${elem}_${index}`}
              onClick={() => onSetActiveItem(index)}>
              {elem}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
