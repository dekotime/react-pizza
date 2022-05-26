import { filters } from './filters';
import { pizzas } from './pizzas';
import { combineReducers } from 'redux';
import {cart} from "./cart";

export const rootReducer = combineReducers({
  filters,
  pizzas,
  cart
});