import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log('lol',data)
    

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    console.log('yes')
    const { data } = await api.signUp(formData);
console.log('sdf',data)
    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
