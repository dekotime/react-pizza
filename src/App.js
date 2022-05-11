import { Header } from './components';
import { Cart, Home } from './pages';
import { Route } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then((json) => this.props.setPizzas(json.pizzas));
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={this.props.items} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (name) => dispatch(setPizzas(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
