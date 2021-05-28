import { connect } from 'react-redux';
import App from '../component/App';
import * as action from '../actions/index';
import { getAddAlarmList, deleteAlarm } from '../utills/api';

const mapStateToProps = state => {
  const alarmList = state.alarmInfo.alarmList;

  if (!alarmList) {
    return {
    ...state.alarmInfo
    };
  }

  return {
    ...state.alarmInfo,
    alarmList: alarmList,
    isLoading: state.alarmInfo.isLoading,
    isError: state.alarmInfo.isError,
    pauseKey: state.pausedInfo.pauseKey
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddList(){
      return getAddAlarmList(dispatch);
    },
    async onDeleteAlarm(key){
      try {
        dispatch(action.deleteAlarmRequest(key));
        await deleteAlarm(key);
        dispatch(action.deleteAlarmSuccess(key));
      } catch(error) {
        console.log('네트워크문제로 삭제가 실패하였습니다. 다시 시도해주세요.')
        dispatch(action.deleteAlarmFailure());
      }
    },
    onPauseAlarm(key){
      return dispatch(action.pauseAlarmSuccess(key));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
