import React from 'react';
import styles from './AlarmList.module.css';

export default function AlarmList({alarmList, getPauseInfo, getDeleteKey}){
  return (
    <ul>
      {alarmList.map((alarm) => (
        <li key={alarm.id} className={alarm.id}>
          <span className={styles.timeBox}>{alarm.startAt}</span>
          <span className={styles.contentBox}>{alarm.content}</span>
          <span className={styles.modeBox}>{`/${alarm.alarmMode}/`}</span>
          <span className={styles.modeBox}>{`${alarm.mode}/`}</span>
          <button onClick={() => {getPauseInfo(alarm.id)}}>Pause</button>
          <button onClick={() => {getDeleteKey(alarm.id)}}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
