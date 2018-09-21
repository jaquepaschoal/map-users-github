//types
export const Types = {
  ADD_REQUEST: "users/ADD_REQUEST",
  ADD_SUCCESS: "users/ADD_SUCCESS",
  ADD_FAILURE: "users/ADD_FAILURE",
  REMOVE_USER: "users/REMOVE_USER"
};

//reducers
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      };
    case Types.REMOVE_USER:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.filter(user => action.payload.id !== user.id)
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

//actions
export const Creators = {
  addUserRequest: username => ({
    type: Types.ADD_REQUEST,
    payload: { username }
  }),

  addUsersuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  removeUser: id => ({
    type: Types.REMOVE_USER,
    payload: { id }
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
};
