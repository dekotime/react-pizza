import { Header } from './components';
import { Cart, Home } from './pages';
import { Route } from 'react-router-dom';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then((response) => response.json())
      .then((json) => dispatch(setPizzas(json)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
};

export default App;
