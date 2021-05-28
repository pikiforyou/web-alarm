import { combineReducers } from 'redux';
import alarmInfo from './alarmInfo';
import deletedInfo from './deletedInfo';
import pausedInfo from './pausedInfo';

export default combineReducers({
    alarmInfo,
    deletedInfo,
    pausedInfo
});
