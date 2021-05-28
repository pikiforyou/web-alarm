import React, { useEffect } from 'react';
import MainClock from '../component/MainClock';
import AlarmForm from './AlarmForm';
import AlarmList from './AlarmList';
import styles from './App.module.css';

function App({onAddList, onDeleteAlarm, onPauseAlarm, alarmList, pauseKey, isLoading, isError }){

  useEffect(() => {
    onAddList();
  }, []);

  return (
    <div>
      <div className={styles.clockShape}>
        <MainClock
          alarmList={alarmList}
          pauseKey={pauseKey}
        />
      </div>
      <div className={styles.inputShape}>
        <AlarmForm />
      </div>
      <div className={styles.listShape}>
        <AlarmList
          alarmList={alarmList}
          getPauseInfo={onPauseAlarm}
          getDeleteKey={onDeleteAlarm}
        />
      </div>
    </div>
  );
}

export default App;
