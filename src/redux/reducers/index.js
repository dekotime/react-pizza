import { filters } from './filters';
import { pizzas } from './pizzas';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  filters,
  pizzas,
});