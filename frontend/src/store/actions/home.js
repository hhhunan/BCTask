export const GET_USERS_LIST_REQUEST = 'GET_USERS_LIST_REQUEST';
export const GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS';
export function getUsersListRequest() {
  return {
    type: GET_USERS_LIST_REQUEST,
    payload: {},
  };
}

export const GET_USER_TYPES_REQUEST = 'GET_USER_TYPES_REQUEST';
export const GET_USER_TYPES_SUCCESS = 'GET_USER_TYPES_SUCCESS';
export function getUserTypesRequest() {
  return {
    type: GET_USER_TYPES_REQUEST,
    payload: {},
  };
}

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';
export function createUserRequest(data) {
  return {
    type: CREATE_USER_REQUEST,
    payload: { data },
  };
}

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export function deleteUserRequest(id) {
  return {
    type: DELETE_USER_REQUEST,
    payload: { id },
  };
}


export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export function getSingleUserRequest(id) {
  return {
    type: GET_USER_REQUEST,
    payload: { id },
  };
}
