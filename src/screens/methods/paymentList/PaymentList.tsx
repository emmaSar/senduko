import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BigCardPayment from "../../../components/bigCardPayment/BigCardPayment";
import Wise from "../../../assets/svgs/Wise.svg";
import Western from "../../../assets/svgs/Western.svg";
import KoronaPay from "../../../assets/svgs/KoronaPay.svg";
import Profee from "../../../assets/svgs/profee.svg";
import Zen from "../../../assets/svgs/Zen.svg";
import Transfergo from "../../../assets/svgs/Transfergo.svg";
import Skrill from "../../../assets/svgs/Skrill.svg";
import Paysend from "../../../assets/svgs/Paysend.svg";
import InfoIcon from "../../../assets/svgs/InfoIcon.svg";
import X from "../../../assets/svgs/x.svg";
import {
  paymentListSelector,
  valueSelector,
} from "../../../store/selectors/main-selector";
import BigCardPaymentSmall from "../../../components/bigCardPayment/BigCardPaymentSmall";
import "./PaymentListStyle.css";

function PaymentList() {
  const [isMore, setIsMore] = useState<any>(null);
  const paymentList = useSelector(paymentListSelector);
  const value = useSelector(valueSelector);
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
  const returnImage = (site: string) => {
    switch (site) {
      case "westernUnion.com":
        return Western;
      case "koronapay.com":
        return KoronaPay;
      case "profee.com":
        return Profee;
      case "zen.com":
        return Zen;
      case "transfergo.com":
        return Transfergo;
      case "skrill.com":
        return Skrill;
      case "paysend.com":
        return Paysend;
      default:
        return Wise;
    }
  };
  const returnColor = (site: string) => {
    switch (site) {
      case "westernUnion.com":
        return "#FFF4DF";
      case "koronapay.com":
        return "#D7EEF8";
      case "profee.com":
        return "#ECECFB";
      case "zen.com":
        return "#EFEFEF";
      case "transfergo.com":
        return "#F7F4D0";
      case "skrill.com":
        return "#F5E8F2";
      case "paysend.com":
        return "#F0E6FE";
      default:
        return "#DAECCB";
    }
  };
  return (
    <div>
      {isSmallScreen ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginTop: 32,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              opacity: "60%",
              marginRight: 20,
            }}
          >
            Найдено {paymentList.length} сервисов
          </span>
          <img
            src={InfoIcon}
            alt="InfoIcon"
            onClick={() => {
              setIsInfo(true);
            }}
            style={{ cursor: "pointer" }}
          />
          {isInfo && (
            <div
              className="info-window"
              style={{ top: 15, marginLeft: 16, marginRight: 16 }}
            >
              <img
                onClick={() => setIsInfo(!isInfo)}
                src={X}
                alt="Arrow-X"
                style={{ cursor: "pointer", position: "absolute", right: 16 }}
              />
              <span style={{ marginTop: 40 }}>
                В соответствии с текущими ограничениями НБУ для денежных
                переводов на банковские карты и счета: вы можете отправлять до
                20 переводов в месяц, максимальная сумма которых не может
                превышать 29 999 UAH за перевод и 399 999 UAH в месяц.
              </span>
            </div>
          )}
        </div>
      ) : (
        <span
          style={{
            fontSize: 14,
            fontWeight: 400,
            opacity: "60%",
            marginTop: 50,
          }}
        >
          В соответствии с текущими ограничениями НБУ для денежных переводов на
          банковские <br /> карты и счета: вы можете отправлять до 20 переводов
          в месяц, максимальная сумма <br /> которых не может превышать 29 999
          UAH за перевод и 399 999 UAH в месяц
        </span>
      )}
      <div className={isSmallScreen ? "list-payment-small" : "list-payment"}>
        {paymentList.map((item: any, index: number) => {
          return isSmallScreen ? (
            <BigCardPaymentSmall
              priceFrom={value}
              status={
                index === 0
                  ? "Рекомендовано"
                  : index === 1
                  ? "Лучшее предложение"
                  : index === 2
                  ? "Самый быстрый"
                  : ""
              }
              site={item.site}
              result={item.result}
              key={index}
              image={returnImage(item.site)}
              commission={item?.commission}
              percentCommission="(1%)"
              time="В тот же день"
              price={item.get_amount}
              percent={item.percent}
              isBig={
                index !== paymentList.length - 1
                  ? parseFloat(item.get_amount) -
                      parseFloat(paymentList[index + 1].get_amount) >
                    0
                  : parseFloat(item.get_amount) -
                      parseFloat(paymentList[index - 1].get_amount) >
                    0
              }
              size={
                index !== paymentList.length - 1
                  ? Math.abs(
                      parseFloat(item.get_amount) -
                        parseFloat(paymentList[index + 1].get_amount)
                    )
                  : Math.abs(
                      parseFloat(item.get_amount) -
                        parseFloat(paymentList[index - 1].get_amount)
                    )
              }
              nextPaymentName={
                index !== paymentList.length - 1
                  ? paymentList[index + 1].site
                  : paymentList[index - 1].site
              }
              listPayment={[]}
              feature="sav"
              review="scasc"
              isMore={index === isMore}
              setIsMore={(value) => {
                setIsMore(value ? index : null);
              }}
              isInfo={index === isInfo}
              setIsInfo={(value) => {
                setIsInfo(value ? index : null);
              }}
              backgroundColor={returnColor(item.site)}
              fromCurrency={item.from_currency}
              toCurrency={item.to_currency}
              isFirst={index === 0}
            />
          ) : (
            <BigCardPayment
              priceFrom={value}
              status={
                index === 0
                  ? "Рекомендовано"
                  : index === 1
                  ? "Лучшее предложение"
                  : index === 2
                  ? "Самый быстрый"
                  : ""
              }
              site={item.site}
              result={item.result}
              key={index}
              image={returnImage(item.site)}
              commission={item?.commission}
              percentCommission="(1%)"
              time="В тот же день"
              price={item.get_amount}
              parcent={item.percent}
              isBig={
                index !== paymentList.length - 1
                  ? parseFloat(item.get_amount) -
                      parseFloat(paymentList[index + 1].get_amount) >
                    0
                  : parseFloat(item.get_amount) -
                      parseFloat(paymentList[index - 1].get_amount) >
                    0
              }
              size={
                index !== paymentList.length - 1
                  ? Math.abs(
                      parseFloat(item.get_amount) -
                        parseFloat(paymentList[index + 1].get_amount)
                    )
                  : Math.abs(
                      parseFloat(item.get_amount) -
                        parseFloat(paymentList[index - 1].get_amount)
                    )
              }
              nextPaymentName={
                index !== paymentList.length - 1
                  ? paymentList[index + 1].site
                  : paymentList[index - 1].site
              }
              listPayment={[]}
              feature="sav"
              review="scasc"
              isMore={index === isMore}
              setIsMore={(value) => {
                setIsMore(value ? index : null);
              }}
              backgroundColor={returnColor(item.site)}
              fromCurrency={item.from_currency}
              toCurrency={item.to_currency}
              isFirst={index === 0}
            />
          );
        })}
      </div>
    </div>
  );
}
export default PaymentList;
