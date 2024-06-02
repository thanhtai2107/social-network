import { GET_USER, LOGIN_USER, LOGOUT } from "./ActionType";

const initialState = {
  user: null,
  jwt: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return { ...state, jwt: payload.token };
    case GET_USER:
      return { ...state, user: payload };
    case LOGOUT:
      return { initialState };
    default:
      return state;
  }
};
