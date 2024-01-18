import { MainTypes } from "../types/main";

export const initialState = {
  counties: {},
  countryFrom: "AT",
  countryTo: "UA",
  currencyFrom: "",
  currencyTo: "",
  currencyList: [""],
  value: "",
  isSender: true,
  payment: "все",
  paymentList: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case MainTypes.SET_COUNTRIES:
      return {
        ...state,
        counties: action.payload,
        countryFrom: Object.keys(action.payload)[0],
        currencyFrom:
          action.payload[Object.keys(action.payload)[0]].from_currency[0],
        currencyTo: action.payload[Object.keys(action.payload)[0]].to_currency[0],

      };
    case MainTypes.SET_COUNTRY_FROM:
      return {
        ...state,
        countryFrom: action.payload,
      };
    case MainTypes.SET_COUNTRY_TO:
      return {
        ...state,
        countryTo: action.payload,
      };
    case MainTypes.SET_CURRENCY_FROM:
      return {
        ...state,
        currencyFrom: action.payload,
      };
    case MainTypes.SET_CURRENCY_TO:
      return {
        ...state,
        currencyTo: action.payload,
      };
    case MainTypes.SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case MainTypes.SET_IS_SENDER:
      return {
        ...state,
        isSender: action.payload,
      };
    case MainTypes.SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
      case MainTypes.SET_PAYMENT_LIST:
        return {
          ...state,
          paymentList: action.payload,
        };
    default:
      return state;
  }
};
export default mainReducer;
