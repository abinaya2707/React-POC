import * as dotenv from "dotenv";
dotenv.config();
console.log("process.env.REACT_APP_ENDPOINT", process.env.REACT_APP_ENDPOINT);
export const baseUrl: string =
  process.env.REACT_APP_ENDPOINT + "/stock-ts/us-central1/stockApp";
