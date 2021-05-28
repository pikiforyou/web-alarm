import firebase from './firebase';
import { addAlarmRequest, addAlarmFailure, addAlarmSuccess } from '../actions';

const database = firebase.database();

export function setAddAlarm(selectMode, selectAlarm, selectStart, content){
  let timePath = (selectStart.split(':').join(''))*1;
  let check = database.ref(`alarm/${timePath}`).push().key;

  const alarmList = {
    'mode': selectMode,
    'alarmMode': selectAlarm,
    'startAt': selectStart,
    'content': content,
    'key': check
  };

  return (
    database.ref(`alarm/${timePath}`).update(alarmList)
  );
}

export const getAddAlarmList = (dispatch) => {
  const orderData = firebase.database().ref('alarm/').orderByChild('startAt');

  return orderData.on('value', snapshot => {
    const list = snapshot.val();
    const alarmList = list ?
      Object.keys(list)
      .map(id => ({id, ...list[id]}))
      .sort((a, b) => Number(a.id) - Number(b.id)) : [];

    dispatch(addAlarmRequest(alarmList));
    dispatch(addAlarmSuccess(alarmList));
  }, error => {
    dispatch(addAlarmFailure(error));
  });
};

export const deleteAlarm = key => {
  return new Promise((resolve, reject) => {
    database.ref('alarm/' + key).remove()
    .then(() => resolve())
    .catch(() => reject());
  })
};
