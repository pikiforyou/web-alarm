import { ADD_ALARM_REQUEST, ADD_ALARM_SUCCESS, ADD_ALARM_FAILURE } from "../constants/actionTypes";

const initialState = {
	isLoading: false,
	isError: false,
	alarmList: []
};

export default function alarmList(state = initialState, action){
  switch (action.type){
		case ADD_ALARM_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
				alarmList: action.alarmList
			};
		case ADD_ALARM_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				alarmList: action.alarmList
			};
		case ADD_ALARM_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
				alarmList: state.alarmList
			};
    default:
    	return state;
  }
};
