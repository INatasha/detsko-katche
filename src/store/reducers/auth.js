import * as actionTypes from '../actions/actionTypes';
import * as CONST from '../../constants';
import { updateObject } from '../utility';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/',
  userImage: CONST.DEFAULT_USER_AVATAR,
  userColor: CONST.THEME_COLORS.primary.main,
  mode: CONST.MODES.PARENT,
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    email: action.email,
    error: null,
    loading: false,
    password: action.password,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const updateUserColor = (state, action) => {
  return updateObject(state, { ...action });
};

const updateMode = (state, action) => {
  return updateObject(state, { ...action });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    case actionTypes.UPDATE_USER_COLOR:
      return updateUserColor(state, action);
    case actionTypes.UPDATE_MODE:
      return updateMode(state, action);
    default:
      return state;
  }
};

export default reducer;
