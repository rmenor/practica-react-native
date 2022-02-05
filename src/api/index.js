import axios from 'axios';
import {API_URL} from '../config/api';

const aInstance = axios.create({
  baseURL: API_URL,
  headers: {'Content-Type': 'application/json'},
});

export const getPeople = async params => {
  const url = '/characters';
  const {data: resData} = await aInstance.get(url, {params: params});
  return resData;
};

export const postPeople = async data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({...data, id: Math.random()}), 2000);
  });
};
