import {
  GET_USER_REQUEST, GET_USER_SUCCESS,
} from '../actions/home';

const initialState = {
  user: [],
  requestStatus: '',
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return {
        ...state,
        requestStatus: 'request',
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.data.data,
        requestStatus: 'ok',
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
