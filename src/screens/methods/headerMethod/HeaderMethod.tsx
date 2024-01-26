import React, { useEffect, useState } from "react";
import { Chip } from "@material-ui/core";
import SelectCountry from "../../../components/selectCountry/SelectCountry";
import SelectCurrency from "../../../components/selectCurrency/SelectCurrency";
import TextInput from "../../../components/textInputWithSelect/TextInputWithSelect";
import { ReactComponent as Reorder } from "../../../assets/svgs/Reorder.svg";
import ButtonGroupComponent from "../../../components/buttonGroup/ButtonGroup";
import Background1 from "../../../assets/svgs/background1.svg";
import SearchBlack from "../../../assets/svgs/SearchBlack.svg";
import { ReactComponent as Clear } from "../../../assets/svgs/Clear.svg";
import Card from "../../../assets/svgs/Card.svg";
import Layer from "../../../assets/svgs/Layer.svg";
import Cash from "../../../assets/svgs/Cash.svg";

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

function HeaderMethod() {
  const dispatch = useDispatch();
  const paymentList = useSelector(paymentListSelector);
  const list = useSelector(countriesSelector);
  const countryFrom = useSelector(countryFromSelector);
  const countryTo = useSelector(countryToSelector);
  const currencyFrom = useSelector(currencyFromSelector);
  const currencyTo = useSelector(currencyToSelector);
  const value = useSelector(valueSelector);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const currencyList = useSelector(currencyListSelector);
  const isSender = useSelector(isSenderSelector);
  const payment = useSelector(paymentSelector);

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
    <div
      style={{
        height: 680,
        display: "flex",
        position: "relative",
        marginTop: 60,
        marginLeft: 100,
        marginRight: 100,
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 60,
      }}
    >
      <div
        className={"block-method"}
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className={"rowContainer-method"}>
          <SelectCountry
            list={list}
            value={countryFrom}
            setValue={(value) => dispatch(setCountryFrom(value))}
            label="Страна отправителя"
            width="20.6%"
            right="1.3%"
          />
          <div
            style={{
              position: "absolute",
              zIndex: 100,
              left: "20%",
              top: isSmallScreen ? "44%" : "40%",
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
            right="1.3%"
          />
          <div style={{ position: "relative", display: "flex" }}>
            <div style={{ position: "absolute", top: -15, left: 24,zIndex:1 }}>
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
              width="55%"
              right="2.2%"
            />
            <SelectCurrency
          label={!isSender? 'отправьте': "получаете"}
          value={isSender? currencyTo:currencyFrom}
          setValue={(value) => {isSender? dispatch(setCurrencyTo(value)):dispatch(setCurrencyTo(value))}}
          currency={isSender? list[countryFrom]?.to_currency ?? []: list[countryFrom]?.from_currency ?? []}
              isMethod={true}
              // width='31%'
            />
            <div
              style={{
                width: "10%",
                marginLeft: "2.2%",
                height: "auto",
                background: "#FFC737",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => calculate()}
            >
              <img src={SearchBlack} alt="search" width={30} height={30} />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <span className="text-payment-method">Cпособ оплаты:</span>
          {isSmallScreen && (
            <Chip
              label={payment}
              style={styles.chip}
              variant={"default"}
              deleteIcon={<Clear />}
              onDelete={() => {}}
            />
          )}
          {
            <div style={styles.payment}>
              {payments.map((item, index) => {
                return (
                  <Chip
                    key={index}
                    label={item}
                    style={payment === item ? styles.chip : styles.chipOut}
                    variant={payment === item ? "default" : "outlined"}
                    onClick={() => {
                      dispatch(setPayment(item));
                    }}
                    deleteIcon={<Clear />}
                    // onDelete={()=>{}}
                  />
                );
              })}
            </div>
          }
        </div>
      </div>
      <div className="background-method">
        <span className="title-method">Способы получения</span>
        {paymentList?.length > 0 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            //  width: "100%",
           
            }}
          >
            <CardPayment
              title="на карту"
              price={paymentList[0].payment_methoses_card}
              image={Card}
              isGood={true}
              fromCurrency={paymentList[0].from_currency}
              isSelected={true}
            />
            <CardPayment
              title="на банковский счет"
              price={paymentList[0].payment_methoses_account}
              image={Layer}
              margin={true}
              fromCurrency={paymentList[0].from_currency}
            />
            <CardPayment
              title="Получение наличными"
              price={paymentList[0].payment_methoses_cash}
              image={Cash}
              fromCurrency={paymentList[0].from_currency}
            />
          </div>
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
export default HeaderMethod;
