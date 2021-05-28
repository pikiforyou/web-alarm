import React, { useState } from 'react';
import { setAddAlarm } from '../utills/api';
import styles from './AlarmForm.module.css';

export default function AlarmForm(){
  const [selectMode, setSelectMode] = useState('');
  const [selectAlarm, setSelectAlarm] = useState('');
  const [selectStart, setSelectStart] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    setAddAlarm(selectMode, selectAlarm, selectStart, content);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <select
            value={selectMode}
            onChange={(e) => setSelectMode(e.target.value)}>
              <option value=''> Select Mode </option>
              <option value='DAYTIME'> DAYTIME </option>
              <option value='VIBRATION'> VIBRATION </option>
              <option value='NIGHT'> NIGHT </option>
          </select>
          <select
            value={selectAlarm}
            onChange={(e) => setSelectAlarm(e.target.value)}>
              <option value=''> Select Alarm </option>
              <option value='NORMAL'> NORMAL </option>
              <option value='URGENT'> URGENT </option>
          </select>
        </div>
        <div className={styles.timeBox}>
          <label>Time :</label>
          <input
            type='time'
            step='2'
            value={selectStart}
            onChange={(e) => setSelectStart(e.target.value)}
          />
        </div>
        <div className={styles.contentBox}>
          <label>Content :</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className={styles.submitBox}>
          <input
            type="submit"
            value="MAKE ALARM!"
          />
        </div>
      </form>
    </div>
  );
}
