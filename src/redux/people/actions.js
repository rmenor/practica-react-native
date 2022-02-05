import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';

const PAGE_LIMIT = 6; // Para la paginación

export const setLoading = (loading = false) => {
  const action = {
    type: types.PEOPLE_UPDATE_LOADING,
    payload: loading,
  };

  return action;
};

export const setList = (list = [], total = 0) => ({
  type: types.PEOPLE_UPDATE_LIST,
  payload: {list, total},
});

export const setOffset = (offset = 0) => {
  const action = {
    type: types.PEOPLE_UPDATE_OFFSET,
    payload: offset,
  };
  return action;
};

export const setItem = (item = null) => {
  const action = {
    type: types.PEOPLE_UPDATE_ITEM,
    payload: item,
  };

  return action;
};

export const initList = () => {
  const functionAction = dispatch => {
    dispatch(setList([], 0));
    dispatch(setOffset(0));
    dispatch(getList());
  };
  return functionAction;
};

export const getNextPage = () => {
  const functionAction = (dispatch, getState) => {
    const {offset} = getState().people;
    const newOffset = offset + PAGE_LIMIT;
    dispatch(setOffset(newOffset));
    dispatch(getList());
  };
  return functionAction;
};

// Listado de personajes
export const getList = () => {
  const asyncFuncAction = async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const {offset, list: currentList} = getState().people;
      const params = {limit: PAGE_LIMIT, offset: offset};
      const getPeopleRes = await api.getPeople(params);

      const newList = getPeopleRes || [];
      // Lo pongo así porque el api no tiene count o total
      const total = 62 || 0;

      const list = [...currentList, ...newList];
      dispatch(setList(list, total));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return asyncFuncAction;
};

// Formulario
export const postPeople = peopleData => {
  const asyncFuncAction = async (dispatch, getState) => {
    try {
      const people = getState().people.item;
      if (!people || !peopleData) {
        return;
      }

      dispatch(setLoading(true));

      const data = {...peopleData, people: peopleData?.name};
      await api.postPeople(data);

      dispatch(getList());
      Actions.pop();
      Alert.alert('Genial', 'Personaje creado correctamente');
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
  return asyncFuncAction;
};
