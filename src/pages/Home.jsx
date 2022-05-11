import React from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

const categoryItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Home = () => {
  const items = useSelector((state) => state.pizzas.items);
  const dispatch = useDispatch();

  const onSelectCategory = React.useCallback((category) => dispatch(setCategory(category)), []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItems={onSelectCategory} items={categoryItems} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
