import {
  FETCH_PROJECTS_START,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
} from "../actions/projectsActions";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function projectsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECTS_START:
      return { ...state, loading: true, error: false };
    case FETCH_PROJECTS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case FETCH_PROJECTS_ERROR:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
