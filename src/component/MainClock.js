import React, { useEffect, useState } from 'react';
import soundFile from './alarm.mp3';
import vibrationFile from './vibration.mp3';

export default function MainClock ({alarmList, pauseKey}){
  const TIME = new Date().toLocaleTimeString('en', { hour12: false });
  const SOUND = new Audio(soundFile);
  const VIBRATION = new Audio(vibrationFile);
  const [currentTime, setCurrentTime] = useState(TIME);
  const [startTime, setStartTime] = useState('');
  const [mode, setMode] = useState('');
  const [alarmMode, setAlarmMode] = useState('');

  useEffect(() => {
    if(alarmList){
      for(let i = 0; i < alarmList.length; i++){
        if(alarmList[i].startAt > currentTime){
          setStartTime(alarmList[i].startAt);
          setMode(alarmList[i].mode);
          setAlarmMode(alarmList[i].alarmMode);
          return;
        }
      }
    }
  }, [pauseKey, alarmList]);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString('en', { hour12: false })
      )
    }, 1000)
  });

  useEffect(() => {
    if(currentTime === startTime){
      if(mode === 'VIBRATION'){
        VIBRATION.play();
      } else if(alarmMode === 'URGENT'){
        SOUND.play();
      } else if((alarmMode === 'NORMAL') && (mode === 'NIGHT')){
        alert('야간모드라 따로 소리/진동이 울리지않습니다. 일어나주세요!');
      } else {
        SOUND.play();
      }
    }
  }, [currentTime]);

  return (
    <div>{currentTime}</div>
  );
}
