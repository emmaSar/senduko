import { MainTypes } from "../types/main";

export const setCountries = (payload) => {
  return {
    type: MainTypes.SET_COUNTRIES,
    payload,
  };
};
export const setCountryFrom = (payload) => {
  return {
    type: MainTypes.SET_COUNTRY_FROM,
    payload,
  };
};
export const setCountryTo= (payload) => {
  return {
    type: MainTypes.SET_COUNTRY_TO,
    payload,
  };
};
export const setCurrencyFrom= (payload) => {
  return {
    type: MainTypes.SET_CURRENCY_FROM,
    payload,
  };
};
export const setCurrencyTo= (payload) => {
  return {
    type: MainTypes.SET_CURRENCY_TO,
    payload,
  };
};
export const setValue= (payload) => {
  return {
    type: MainTypes.SET_VALUE,
    payload,
  };
};
export const setIsSender= (payload) => {
  return {
    type: MainTypes.SET_IS_SENDER,
    payload,
  };
};
export const setPayment= (payload) => {
  return {
    type: MainTypes.SET_PAYMENT,
    payload,
  };
};
export const setPaymentList= (payload) => {
  return {
    type: MainTypes.SET_PAYMENT_LIST,
    payload,
  };
};