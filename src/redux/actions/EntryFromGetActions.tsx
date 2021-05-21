import axios from "axios";
import {
  GETTING_DATA_SUCCESS,
  GETTING_DATA_REQUEST,
  GETTING_DATA_ERROR,
  ApidataFetchDetailsI,
} from "./types";
import { baseUrl } from "../../config/endPoint";

export const fetchApiDataSuccess = (data: ApidataFetchDetailsI) => {
  return {
    type: GETTING_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchApiDataRequest = () => {
  return {
    type: GETTING_DATA_REQUEST,
  };
};

export const fetchApiDataFailed = (data: string) => {
  return {
    type: GETTING_DATA_ERROR,
    payload: data,
  };
};

export const fetchDatas = () => {
  return async (dispatch: any) => {
    dispatch(fetchApiDataRequest());
    await axios
      .get(`${baseUrl}/stock`)
      .then((res) => {
        const data = res.data.data;
        dispatch(fetchApiDataSuccess(data));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchApiDataFailed(errorMsg));
      });
  };
};

export const fetchDatasFrequently = () => {
  return async (dispatch: any) => {
    await axios
      .get(`${baseUrl}/stock`)
      .then((res) => {
        const data = res.data.data;
        dispatch(fetchApiDataSuccess(data));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchApiDataFailed(errorMsg));
      });
  };
};

export const deletAllDatas = (data: object) => {
  return async (dispatch: any) => {
    dispatch(fetchApiDataRequest());
    await axios
      .delete(`${baseUrl}/stock`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      })
      .then(() => {
        dispatch(fetchDatas());
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const deletOneData = (data: string) => {
  return async (dispatch: any) => {
    dispatch(fetchApiDataRequest());
    await axios
      .delete(`${baseUrl}/stock/${data}`)
      .then(() => dispatch(fetchDatas()))
      .catch((err) => console.log(err.message));
  };
};

export const updateData = (id: string, data: object) => {
  return async (dispatch: any) => {
    dispatch(fetchApiDataRequest());
    await axios
      .put(`${baseUrl}/stock/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => dispatch(fetchDatas()));
  };
};

export const addData = (data: object) => {
  return async (dispatch: any) => {
    dispatch(fetchApiDataRequest());
    await axios
      .post(`${baseUrl}/stock`, data)
      .then(() => dispatch(fetchDatas()))
      .catch((err) => console.log(err.message));
  };
};
