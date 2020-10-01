import types from "./types";
import { handleActions } from "redux-actions";

const initialState = {
  contributes: {
    loading: true,
    pending: false,
    hasError: false,
    data: [],
    error: {},
  },
  backendContributes: {
    loading: true,
    pending: false,
    hasError: false,
    data: [],
    error: {},
  },
};

// Reducers from redux-actions
export default handleActions(
  {
    [types.GET_CONTRIBUTES]: (state, { payload }) => ({
      ...state,
      contributes: {
        ...state.contributes,
        loading: true,
        pending: true,
      },
    }),
    [types.GET_CONTRIBUTES_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        contributes: {
          ...state.contributes,
          loading: false,
          pending: false,
          data: payload,
        },
      };
    },

    [types.GET_CONTRIBUTES_FAILED]: (state, { payload }) => ({
      ...state,
      contributes: {
        ...state.contributes,
        loading: false,
        pending: false,
        hasError: true,
        error: { payload },
      },
    }),
    [types.GET_CONTRIBUTES_BACKEND]: (state, { payload }) => ({
      ...state,
      backendContributes: {
        ...state.backendContributes,
        loading: true,
        pending: true,
      },
    }),
    [types.GET_CONTRIBUTES_BACKEND_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        backendContributes: {
          ...state.backendContributes,
          loading: false,
          pending: false,
          data: payload,
        },
      };
    },

    [types.GET_CONTRIBUTES_BACKEND_FAILED]: (state, { payload }) => ({
      ...state,
      backendContributes: {
        ...state.backendContributes,
        loading: false,
        pending: false,
        hasError: true,
        error: { payload },
      },
    }),
  },
  initialState
);
