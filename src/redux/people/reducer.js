import * as types from './types';

export const initialState = {
  loading: false,
  list: [],
  total: 0, // El api que estoy usando no tiene
  offset: 0,
  item: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.PEOPLE_UPDATE_LOADING:
      const newState = {
        ...state,
        loading: action.payload,
      };
      return newState;

    case types.PEOPLE_UPDATE_LIST:
      return {
        ...state,
        list: action.payload?.list,
        total: action.payload?.total,
      };

    case types.PEOPLE_UPDATE_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };

    case types.PEOPLE_UPDATE_ITEM:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
