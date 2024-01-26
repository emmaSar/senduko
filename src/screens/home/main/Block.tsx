import React, { useEffect, useState } from "react";
import { Button, Chip } from "@material-ui/core";
import SelectCountry from "../../../components/selectCountry/SelectCountry";
import SelectCurrency from "../../../components/selectCurrency/SelectCurrency";
import TextInput from "../../../components/textInputWithSelect/TextInputWithSelect";
import { ReactComponent as Reorder } from "../../../assets/svgs/Reorder.svg";
import ButtonGroupComponent from "../../../components/buttonGroup/ButtonGroup";
import Background from "../../../assets/svgs/Background.svg";
import { ReactComponent as Clear } from "../../../assets/svgs/Clear.svg";
import Tag from '../../../assets/svgs/Tag.svg'
import "./MainStyle.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  countriesSelector,
  countryFromSelector,
  countryToSelector,
  currencyFromSelector,
  currencyToSelector,
  isSenderSelector,
  paymentSelector,
  valueSelector,
} from "../../../store/selectors/main-selector";
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
// import useDeepSelector from "./useDeepSelector";

function Block() {
  const dispatch = useDispatch();
  const list = useSelector(countriesSelector);
  const countryFrom = useSelector(countryFromSelector);
  const countryTo = useSelector(countryToSelector);
  const currencyFrom = useSelector(currencyFromSelector);
  const currencyTo = useSelector(currencyToSelector);
  // const currencyList=useSelector(currencyListSelector);
  const value = useSelector(valueSelector);
  const isSender = useSelector(isSenderSelector);
  const payment = useSelector(paymentSelector);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
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
    if (value.length > 0) {
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
    }
  };
  return (
    <div
      className={"block-main"}
      style={
        !isSmallScreen
          ? {
              backgroundImage: `url(${Background})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className={"rowContainer-main one"}>
        <SelectCountry
          value={countryFrom}
          setValue={(value) => dispatch(setCountryFrom(value))}
          label="Страна отправителя"
          list={list}
        />
        <div
          style={{
            position: "absolute",
            zIndex: 100,
            left: "47.5%",
            top: isSmallScreen ? "44%" : "40%",
            cursor: "pointer",
          }}
          onClick={() => {
            //   dispatch(setCountryFrom(countryTo));
            //  dispatch(setCountryTo(countryFrom))
          }}
        >
          <Reorder />
        </div>
        <SelectCountry
          list={{ UA: { name: "Україна" }, ...list }}
          value={countryTo}
          disabled={true}
          setValue={(value) => dispatch(setCountryTo(value))}
          label="Страна получателя"
        />
      </div>

      <div className={isSmallScreen ? "row-block" : "rowContainer-main "}>
        <div style={{ position: "absolute", top: -15, left: 24 }}>
          <ButtonGroupComponent
            isSender={isSender}
            setIsSender={(val) => dispatch(setIsSender(val))}
          />
        </div>
        <TextInput
          value={value}
          setValue={(value) => dispatch(setValue(value))}
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
        />
      </div>
      <div
        style={{
          marginTop: 30,
          display:isSmallScreen?"flex": "block",
          marginLeft: isSmallScreen ? 16 : 0,
          alignItems: "center",
          justifyContent: "center",
          position:'relative'
        }}
      >
        <span className="text-payment">Cпособ оплаты:</span>

        {isSmallScreen && (
          <>
       {payment&&   <Chip
            label={payment}
            style={{...styles.chip}}
            variant={"default"}
            deleteIcon={<Clear />}
            onDelete={() => {dispatch(setPayment())}}
          />}
          <img src={Tag} alt="Tag" style={{cursor:'pointer'}} onClick={()=>{setIsInfo(true)}}/>
          { isInfo&& <div className="info-window" style={{top:0}}>
          {payments.map((item, index) => {
              return  <Chip
                  key={index}
                  label={item}
                  style={ {...styles.chip,backgroundColor:item===payment?'#644FE4':'white',marginBottom:5}}
                  variant={"outlined"}
                  onClick={() => {
                    dispatch(setPayment(item));
                    setIsInfo(false)
                  }}
                  deleteIcon={<Clear />}
                
                />
              
            })}
           </div>}
          </>
        )}
        {!isSmallScreen && (
          <div style={styles.payment}>
            {payments.map((item, index) => {
              return payment === item ? (
                <Chip
                  key={index}
                  label={item}
                  style={styles.chip}
                  variant={"outlined"}
                  onClick={() => {
                    dispatch(setPayment(item));
                  }}
                  deleteIcon={<Clear />}
                  onDelete={() => {
                    dispatch(setPayment());
                  }}
                />
              ) : (
                <Chip
                  key={index}
                  label={item}
                  style={styles.chipOut}
                  variant={"outlined"}
                  onClick={() => {
                    dispatch(setPayment(item));
                  }}
                  deleteIcon={<Clear />}
                />
              );
            })}
          </div>
        )}
      </div>
      <Link to={value.length > 0 ? "/methods" : "/home"}>
        <Button className={"button-main"} onClick={() => calculate()}>
          Сравнить
        </Button>
      </Link>
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
    alignItems: "center",
    width: "100%",
    marginLeft: 88,
    marginTop: 15,
  },
};
export default Block;
