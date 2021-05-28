import React from 'react';
import { shallow } from 'enzyme';
import alarmList from './alarmInfo';
import * as types from '../constants/actionTypes';

const alarmListEx = {
  id: "71202",
  alarmMode: "NORMAL",
  content: "야간모드에서는 울리지않습니다",
  key: "-M1-ZkHXFBf3_JLfkgS9",
  mode: "NIGHT",
  startAt: "07:12:02"
}

describe('Check alarmInfo Reducer', () => {
  it('should handle initial state', () => {
    expect(
      alarmList(undefined, {})
    ).toEqual({
      isLoading: false,
      isError: false,
      alarmList: [],
    })
  })

  it('should handle add state of alarmList', () => {
    expect(
      alarmList({}, {
        type: types.ADD_ALARM_SUCCESS,
        alarmList: {alarmListEx}
      })
    ).toEqual({
      isLoading: false,
      isError: false,
      alarmList: {alarmListEx}
    })
  })
})