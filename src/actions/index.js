import * as types from '../constants/actionTypes';

export const addAlarmRequest = (alarmList) => ({
  type: types.ADD_ALARM_REQUEST,
  alarmList
});

export const addAlarmSuccess = (alarmList) => ({
  type: types.ADD_ALARM_SUCCESS,
  alarmList
});

export const addAlarmFailure = (error) => ({
  type: types.ADD_ALARM_FAILURE,
  error
});

export const pauseAlarmSuccess = (key) => ({
  type: types.PAUSE_ALARM_SUCCESS,
  pauseKey: key
});

export const deleteAlarmRequest = (key) => ({
  type: types.DELETE_ALARM_REQUEST,
  deleteKey: key
});

export const deleteAlarmSuccess = (key) => ({
  type: types.DELETE_ALARM_SUCCESS,
  deleteKey: key
});

export const deleteAlarmFailure = (error) => ({
  type: types.DELETE_ALARM_FAILURE,
  error
});
