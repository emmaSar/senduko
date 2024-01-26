import React, { useEffect, useState } from "react";
import { Button, Chip } from "@material-ui/core";
import SelectCountry from "../../../components/selectCountry/SelectCountry";
import SelectCurrency from "../../../components/selectCurrency/SelectCurrency";
import TextInput from "../../../components/textInputWithSelect/TextInputWithSelect";
import { ReactComponent as Reorder } from "../../../assets/svgs/Reorder.svg";
import ButtonGroupComponent from "../../../components/buttonGroup/ButtonGroup";
import { ReactComponent as Clear } from "../../../assets/svgs/Clear.svg";
import Card from "../../../assets/svgs/Card.svg";
import Layer from "../../../assets/svgs/Layer.svg";
import Cash from "../../../assets/svgs/Cash.svg";
import Up from "../../../assets/svgs/Up.svg";
import DownUp from "../../../assets/svgs/DownUp.svg";
import RightLine from "../../../assets/svgs/RightLine.svg";
import Tag from "../../../assets/svgs/Tag.svg";

import "./HeaderMethodStyle.css";
import CardPayment from "../../../components/cardPayment/CardPayment";
import { useSelector } from "react-redux";
import {
  countriesSelector,
  countryFromSelector,
  countryToSelector,
  currencyFromSelector,
  currencyListSelector,
  currencyToSelector,
  isSenderSelector,
  paymentListSelector,
  paymentSelector,
  valueSelector,
} from "../../../store/selectors/main-selector";
import { useDispatch } from "react-redux";
import {
  setCountryFrom,
  setCountryTo,
  setCurrencyFrom,
  setCurrencyTo,
  setIsSender,
  setPayment,
  setPaymentList,
  setValue,
} from "../../../store/actions/main-action";

function HeaderMethodSmall() {
  const dispatch = useDispatch();
  const paymentList = useSelector(paymentListSelector);
  const list = useSelector(countriesSelector);
  const countryFrom = useSelector(countryFromSelector);
  const countryTo = useSelector(countryToSelector);
  const currencyFrom = useSelector(currencyFromSelector);
  const currencyTo = useSelector(currencyToSelector);
  const value = useSelector(valueSelector);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMore, setIsMore] = useState(true);
  // const currencyList = useSelector(currencyListSelector);
  const isSender = useSelector(isSenderSelector);
  const payment = useSelector(paymentSelector);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isInfo, setIsInfo] = useState<any>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1350px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  const payments = ["все", "банковская карта", "банковский счет", "наличные"];
  const calculate: any = async () => {
    const payment_method =
      payment === "все"
        ? "all"
        : payment === "банковская карта"
        ? "card"
        : payment === "банковский счет"
        ? "account"
        : "cash";
    const action = isSender ? "send" : "receive";

    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://sport.pog-arm.org/public/get/calculation/?from_country=${countryFrom}&to_country=${countryTo}&from_currency=${currencyFrom}&to_currency=${currencyTo}&get_amount=${value}&payment_method=${payment_method}&action=${action}`,
      {
        headers: {
          "Access-Control-Allow-Headers":
            "X-Requested-With, base64:5u8jTwIheLv+v3oHAit+WbRgorLhTjkXWrfdWaKmCt8=",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        method: "GET",
      }
    );
    const paymentList = await response.json();
    dispatch(setPaymentList(paymentList[0]));
  };
  return (
    <div>
      <div
        className={
          "header-method-block" + " " + (!isMore ? "block-padding" : "")
        }
      >
        {isMore ? (
          <>
            <div
              onClick={() => {
                setIsMore(false);
              }}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: 16,
              }}
            >
              <img src={Up} alt="alt-icon" style={{ cursor: "pointer" }} />
            </div>
            <SelectCountry
              list={list}
              value={countryFrom}
              setValue={(value) => dispatch(setCountryFrom(value))}
              label="Страна отправителя"
              width="20.6%"
            />
            <div
              style={{
                position: "absolute",
                zIndex: 100,
                left: "48%",
                top: "27%",
                cursor: "pointer",
              }}
            >
              <Reorder />
            </div>
            <SelectCountry
              list={{ UA: { name: "Україна" }, ...list }}
              width="20.6%"
              value={countryTo}
              setValue={(value) => dispatch(setCountryTo(value))}
              label="Страна получателя"
              disabled={true}
            />
            <div
              style={{
                position: "relative",
                display: "flex",
                marginTop: 30,
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ position: "absolute", top: -15, left: 24, zIndex: 1 }}
              >
                <ButtonGroupComponent
                  isSender={isSender}
                  setIsSender={(val) => dispatch(setIsSender(val))}
                />
              </div>
              <TextInput
                value={value}
                setValue={(val) => dispatch(setValue(val))}
                fromCurrency={isSender ? currencyFrom : currencyTo}
                setFromCurrency={(value) => {
                  isSender
                    ? dispatch(setCurrencyFrom(value))
                    : dispatch(setCurrencyTo(value));
                }}
                currency={
                  isSender
                    ? list[countryFrom]?.from_currency ?? []
                    : list[countryFrom]?.to_currency ?? []
                }
                width="72%"
                //right="2.2%"
              />
              <SelectCurrency
                label={!isSender ? "отправьте" : "получаете"}
                value={isSender ? currencyTo : currencyFrom}
                setValue={(value) => {
                  isSender
                    ? dispatch(setCurrencyTo(value))
                    : dispatch(setCurrencyTo(value));
                }}
                currency={
                  isSender
                    ? list[countryFrom]?.to_currency ?? []
                    : list[countryFrom]?.from_currency ?? []
                }
                isMethod={true}
              />
            </div>
            <div
              style={{
                marginTop: 30,
                display: isSmallScreen ? "flex" : "block",
                marginLeft: isSmallScreen ? 16 : 0,
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <span className="text-payment">Cпособ оплаты:</span>

              <>
            {payment&&<Chip
                  label={payment}
                  style={{ ...styles.chip }}
                  variant={"default"}
                  deleteIcon={<Clear />}
                  onDelete={() => {
                    dispatch(setPayment());
                  }}
                />}
                <img
                  src={Tag}
                  alt="Tag"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setIsInfo(true);
                  }}
                />
                {isInfo && (
                  <div className="info-window" style={{ top: 0 }}>
                    {payments.map((item, index) => {
                      return (
                        <Chip
                          key={index}
                          label={item}
                          style={{
                            ...styles.chip,
                            backgroundColor:
                              item === payment ? "#644FE4" : "white",
                            marginBottom: 5,
                          }}
                          variant={"outlined"}
                          onClick={() => {
                            dispatch(setPayment(item));
                            setIsInfo(false);
                          }}
                          deleteIcon={<Clear />}
                        />
                      );
                    })}
                  </div>
                )}
              </>
            </div>
            <Button
              className={"button-main button-header"}
              onClick={() => calculate()}
            >
              Сравнить
            </Button>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  alt={countryFrom}
                  width={32}
                  height={24}
                  style={{ borderRadius: 30, marginRight: 8 }}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryFrom}.svg`}
                />
                <p className="valueCurrency">
                  {value} {currencyFrom}
                </p>
                <img
                  src={RightLine}
                  alt="Right arrow"
                  style={{ marginLeft: 20, marginRight: 20 }}
                />
                <img
                  alt={"UA"}
                  width={32}
                  height={24}
                  style={{ borderRadius: 30, marginRight: 8 }}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${"UA"}.svg`}
                />
                <p className="valueCurrency">{currencyTo}</p>
              </div>
              <div
                onClick={() => {
                  setIsMore(true);
                }}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src={DownUp}
                  alt="alt-icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div className={"bottom"+(!isMore?' isMoreBottom':'')}>
        <span className="title-method">Способы получения</span>
        {paymentList?.length > 0 ? (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row" as "row",
                // justifyContent: "space-between",
                alignItems: "center",
                overflowX: "scroll",
                marginLeft: 16,
                marginTop: 32,
                marginRight: 16,
                marginBottom: 40,
                paddingTop:12
                // alignItems: "center",
                // justifyContent: "center",
                // width: "100%",
              }}
            >
              <CardPayment
                title="на карту"
                price={paymentList[0].get_amount}
                image={Card}
                isGood={true}
                isSelected={selectedIndex === 0}
                fromCurrency={paymentList[0].from_currency}
                onClick={() => {
                  setSelectedIndex(0);
                }}
              />
              <CardPayment
                title="на банковский счет"
                price={paymentList[0].get_amount}
                image={Layer}
                margin={true}
                isSelected={selectedIndex === 1}
                fromCurrency={paymentList[0].from_currency}
                onClick={() => {
                  setSelectedIndex(1);
                }}
              />
              <CardPayment
                title="Получение наличными"
                price={paymentList[0].get_amount}
                image={Cash}
                fromCurrency={paymentList[0].from_currency}
                isSelected={selectedIndex === 2}
                onClick={() => {
                  setSelectedIndex(2);
                }}
              />
            </div>
            {paymentList?.length > 0 && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                {[0, 1, 2]?.map((_, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 5,
                        backgroundColor:
                          selectedIndex === index ? "#644FE4" : "white",
                        marginRight: 8,
                      }}
                    ></div>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <span className="title-method">нет данных</span>
        )}
      </div>
    </div>
  );
}

const styles = {
  chip: {
    borderWidth: 1,
    backgroundColor: "white",
    color: "#011A3F",
    marginRight: 12,
    cursor: "pointer",
  },
  chipOut: {
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    marginRight: 12,
    cursor: "pointer",
  },
  payment: {
    display: "flex",
    flexDirection: "row" as "row",
    // width: "100%",
    // marginLeft: 88,
    // marginTop: 15,
  },
};
export default HeaderMethodSmall;
