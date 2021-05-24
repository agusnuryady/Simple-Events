import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE_KEY } from '../../constants';

export const SET_USERNAME = 'SET_USERNAME';
export const RESET_REDUCER = 'RESET_REDUCER';
export const SAVE_EVENTS = 'SAVE_EVENTS';
export const DELETE_EVENTS = 'DELETE_EVENTS';

export const setUsername = (data, navigation) => (dispatch) => {
  AsyncStorage.setItem(STORAGE_KEY.TOKEN_LOGIN, data);
  dispatch({ type: SET_USERNAME, payload: data });
  navigation.replace('Home');
};

export const logoutUser = (navigation) => (dispatch) => {
  dispatch({ type: RESET_REDUCER });
  AsyncStorage.removeItem(STORAGE_KEY.TOKEN_LOGIN);
  navigation.replace('AuthFirst');
};

export const saveEvents = (data) => (dispatch) => {
  dispatch({ type: SAVE_EVENTS, payload: data });
};

export const deleteEvents = (id) => (dispatch) => {
  dispatch({ type: DELETE_EVENTS, payload: id });
};
