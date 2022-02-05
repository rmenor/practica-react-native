import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import peopleReducer from '../redux/people/reducer';

const reducer = combineReducers({
  people: peopleReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
