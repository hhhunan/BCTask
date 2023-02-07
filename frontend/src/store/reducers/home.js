import { GET_USERS_LIST_SUCCESS, GET_USER_TYPES_SUCCESS, GET_USERS_LIST_REQUEST } from '../actions/home';

const initialState = {
  users: [],
  types: [],
  requestStatus: '',
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USERS_LIST_REQUEST: {
      return {
        ...state,
        requestStatus: 'request',
      };
    }
    case GET_USERS_LIST_SUCCESS: {
      return {
        ...state,
        users: action.payload.data,
        requestStatus: 'ok',
      };
    }
    case GET_USER_TYPES_SUCCESS: {
      return {
        ...state,
        types: action.payload.data,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
