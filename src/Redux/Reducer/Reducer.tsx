import { FETCH_DATA, LOADER } from '../Actiontype';

const INITIAL_STATE = {
  users: [],
  loading: false
};

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        loading: true
      }
    case FETCH_DATA:

      return {
        ...state,
        loading: false,
        users: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
