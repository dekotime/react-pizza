import React from 'react';

const Categories = React.memo(({ items, onClickCategory, activeCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((elem, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              key={`${elem}_${index}`}
              onClick={() => onClickCategory(index)}>
              {elem}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
