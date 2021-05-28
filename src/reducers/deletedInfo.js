import { DELETE_ALARM_REQUEST, DELETE_ALARM_SUCCESS, DELETE_ALARM_FAILURE } from "../constants/actionTypes";

const initialState ={
  isLoading: false,
  isError: false,
  deleteKey: ''
};

export default function deletedInfo(state = initialState, action){
  switch (action.type){
    case DELETE_ALARM_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        deleteKey: action.deleteKey
      };
    case DELETE_ALARM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        deleteKey: action.deleteKey
      };
    case DELETE_ALARM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        deleteKey: state.deleteKey
      }
    default:
      return state;
  }
}
