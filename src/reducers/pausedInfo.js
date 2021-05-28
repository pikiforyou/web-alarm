import { PAUSE_ALARM_SUCCESS } from "../constants/actionTypes";

const initialState ={
  pauseKey: ''
};

export default function pausedInfo(state = initialState, action){
  switch (action.type){
    case PAUSE_ALARM_SUCCESS:
      return {
        ...state,
        pauseKey: action.pauseKey
      };
    default:
      return state;
  }
}
