import axios from "axios";
import { BASE_URL } from "../constant/url";

const TIMEOUT = 10000;

const instance = axios.create({
  BASE_URL,
  TIMEOUT
});

export const getAuthHeader = () => {
  return {
    headers: {
      "Content-Type": " application/json"
    }
  };
};

export const getError = error => {
  let message, errorCode, httpStatus;
  if (error.response) {
    const response = error.response;
    const data = response.data;
    errorCode = data.error ? data.error : "no_code";
    const messages = data.messages;
    httpStatus = response.status;
    message =
      messages && messages.length > 0
        ? messages[0]
        : "Something went wrong. Try Again!";
  } else if (typeof error === "string") {
    errorCode = "no_code";
    message = error;
  } else {
    message = "Something went wrong. Try Again!";
  }
  return {
    errorCode: errorCode,
    message,
    httpStatus: httpStatus || 0
  };
};

export { instance as axios };
