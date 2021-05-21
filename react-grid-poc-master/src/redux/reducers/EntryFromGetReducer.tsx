import {
  DataGetTypes,
  GETTING_DATA_SUCCESS,
  GETTING_DATA_REQUEST,
  GETTING_DATA_ERROR,
} from "../actions/types";

export interface initialStateI {
  loading: boolean;
  data?: any;
  errorMessage?: string;
}

const initialState: initialStateI = {
  loading: false,
  data: [],
  errorMessage: "",
};

const EntryFromGetReducer = (
  state: initialStateI = initialState,
  action: DataGetTypes
): initialStateI => {
  switch (action.type) {
    case GETTING_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GETTING_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: "",
      };
    case GETTING_DATA_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default EntryFromGetReducer;
