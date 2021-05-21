export const GETTING_DATA_SUCCESS = "GETTING_DATA_SUCCESS";
export const GETTING_DATA_REQUEST = "GETTING_DATA_REQUEST";
export const GETTING_DATA_ERROR = "GETTING_DATA_ERROR";

export interface ApidataFetchDetailsI {
  id: string;
  StartService: string;
  EndService: string;
  ProcedureCode: number;
  Quantity: number;
  ServicePlace: string;
  DiagnosisPointers: string;
  Modifiers: string;
  NdcCode: number;
  NdcQuantity: number;
  BillAmount: number;
  ProviderEmail: string;
  ProviderPhone: string;
  isSelected: boolean;
}

export interface gettingData {
  type: typeof GETTING_DATA_SUCCESS;
  payload: ApidataFetchDetailsI;
}

export interface requestingData {
  type: typeof GETTING_DATA_REQUEST;
}

export interface errorData {
  type: typeof GETTING_DATA_ERROR;
  payload: string;
}

export type DataGetTypes = gettingData | requestingData | errorData;
