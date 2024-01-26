import React from "react";
import "./BigCardPaymentStyle.css";
import { Button } from "@material-ui/core";
import Card from "../../assets/svgs/Card.svg";
import Layer from "../../assets/svgs/Layer.svg";
import Master from "../../assets/svgs/master.svg";
import Visa from "../../assets/svgs/visa.svg";
import GooglePay from "../../assets/svgs/googlePay.svg";
import Pay from "../../assets/svgs/pay.svg";
import Deal from "../../assets/svgs/deal.svg";
import Bancontant from "../../assets/svgs/Bancontant.svg";
import Trustly from "../../assets/svgs/trustly.svg";
import Info from "../../assets/svgs/Info.svg";
import ArrowDown from "../../assets/svgs/ArrowDown.svg";
import ArrowUp from "../../assets/svgs/ArrowUp.svg";
import X from "../../assets/svgs/x.svg";

interface IPayment {
  title: string;
  priceFrom: string;
  curse: string;
  isBig: boolean;
  size: string;
  toPrice: string;
  time: string;
}
function BigCardPaymentSmall({
  image,
  status,
  commission,
  percentCommission,
  time,
  price,
  isBig,
  size,
  listPayment,
  feature,
  review,
  isMore,
  setIsMore,
  backgroundColor,
  site,
  fromCurrency,
  priceFrom,
  percent,
  toCurrency,
  result,
  isFirst,
  isInfo,
  setIsInfo,
  nextPaymentName,
}: {
  image: any;
  status: string;
  commission: string;
  percentCommission: string;
  time: string;
  price: string;
  isBig: boolean;
  size: number;
  nextPaymentName: string;
  listPayment: IPayment[];
  feature: string;
  review: string;
  isMore: boolean;
  setIsMore: (value: boolean) => void;
  isInfo: boolean;
  setIsInfo: (value: boolean) => void;
  backgroundColor: string;
  site: string;
  fromCurrency: string;
  priceFrom: string;
  percent: string;
  toCurrency: string;
  result: string;
  isFirst: boolean;
}) {
  return (
    <div className="card-big-small">
      <div
        className="card-image-small"
        style={{ backgroundColor: backgroundColor }}
      >
        {status && (
          <div
            className="block-status"
            style={{
              backgroundColor:
                status === "Рекомендовано"
                  ? "#644FE4"
                  : status === "Лучшее предложение"
                  ? "#5FD263"
                  : "#D861DB",
            }}
          >
            <span className="block-status-text">{status}</span>
          </div>
        )}
        <img src={image} alt="icon-payment" width={"56.5%"} height={30} />
      </div>

      <div className="card-row" style={{ marginTop: 20 }}>
        <span className="paymentName">
          {site.split(".")[0][0].toUpperCase() +
            site.split(".")[0].substring(1)}
        </span>
        {isFirst && (
          <div
            className="block-first"
            style={{
              backgroundColor: backgroundColor,
            }}
          >
            <span className="block-status-text">
              Get the first two transfers for free!
            </span>
          </div>
        )}
      </div>
      <div
        className="card-row"
        style={{ marginTop: 20, justifyContent: "space-between" }}
      >
        <span className="card-sub">Комиссия</span>
        <div className="card-row" style={{ alignItems: "center" }}>
          <span className="card-title">
            {commission} {fromCurrency}
          </span>
          <span className="card-sub" style={{ marginLeft: 12 }}>
            (1,208%)
          </span>
        </div>
      </div>
      <div className="card-row" style={{ justifyContent: "space-between" }}>
        <span className="card-sub">Срок зачисления</span>
        <span className="card-title">В тот же день</span>
      </div>
      <div className="card-row" style={{ justifyContent: "space-between" }}>
        <span className="card-sub">Отправьте ({fromCurrency})</span>
        <span className="card-title price">
          {price} {fromCurrency}
        </span>
      </div>
      <div
        className="card-row"
        style={{
          justifyContent: "space-between",
          position: "relative",
          alignItems: "center",
        }}
      >
        <span>
          на{" "}
          <span style={{ color: isBig ? "#068F14" : "#E30000" }}>
            {isBig ? "▲" : "▼"}
            {size}
            {fromCurrency} {isBig ? "больше" : " меньше"}{" "}
          </span>
          чем {nextPaymentName}
        </span>
        <div className="card-row">
          <img
            src={Info}
            onClick={() => setIsInfo(!isInfo)}
            style={{ cursor: "pointer" }}
            alt="Info"
          />
          <img
            onClick={() => setIsMore(!isMore)}
            src={isMore ? ArrowUp : ArrowDown}
            alt="Arrow"
            style={{ marginLeft: 8, cursor: "pointer" }}
          />
        </div>
        {isInfo && (
          <div className="info-window">
            <div style={{ position: "relative" }}>
              <span className="title-info-card">Особенности сервиса</span>
              <img
                onClick={() => setIsInfo(!isInfo)}
                src={X}
                alt="Arrow-X"
                style={{ cursor: "pointer", position: "absolute", right: 0 }}
              />
              <br />
              <span className="subTitle-info-card" style={{ marginTop: 12 }}>
                В соответствии с текущими ограничениями НБУ для денежных
                переводов на банковские карты и счета
              </span>
            </div>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <span className="title-info-card">Особенности сервиса</span>
              <br />
              <span className="subTitle-info-card" style={{ marginTop: 12 }}>
                В соответствии с текущими ограничениями НБУ для денежных
                переводов на банковские карты и счета. В соответствии с текущими
                ограничениями НБУ для денежных переводов на банковские карты и
                счета
              </span>
            </div>
            <div>
              <span
                className="title-info-card"
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                Полезные статьи
              </span>
              <br />

              <span className="text-decoration">
                Как получить вид на жительство ↗
              </span>
              <br />
              <span className="text-decoration">Покупка машины ↗</span>
              <br />
              <span className="text-decoration">
                Страховая медецина в Словакии ↗
              </span>
              <br />
              <span className="text-decoration">Ипотека с картой ВНЖ ↗</span>
              <br />
              <span className="text-decoration">
                ВНЖ на основании бизнеса ↗
              </span>
              <br />
            </div>
          </div>
        )}
      </div>

      {isMore && (
        <div>
          <div className="more-div-block-small">
            <div className="item-card small-card">
              <div className="line" />
              <div className="info-big-card">
                <span className="title-info-card">
                  Перевод на банковский счет
                </span>
                <div className="row-item-card">
                  <span className="subTitle-info-card">Вы отправляете</span>
                  <span className="subTitle-info-card">
                    {price} {fromCurrency}
                  </span>
                </div>

                <div className="row-item-card">
                  <span className="subTitle-info-card">Комиссия сервиса</span>
                  <span className="subTitle-info-card">
                    {commission} {fromCurrency}
                  </span>
                </div>
                <div className="row-item-card">
                  <span className="subTitle-info-card">Обменный курс</span>
                  <span className="subTitle-info-card">
                    {result} {fromCurrency}
                  </span>
                </div>
                <div className="row-item-card">
                  <span className="subTitle-info-card">
                    Получаете <br />
                    <span style={{ fontSize: 12 }}>
                      на {isBig ? "▲" : "▼"}
                      {size}
                      {fromCurrency} {isBig ? "больше" : " меньше"} чем{" "}
                      {nextPaymentName}
                    </span>
                  </span>
                  <span className="card-title price" style={{ fontSize: 24 }}>
                    {priceFrom} {toCurrency}
                  </span>
                </div>
                <div className="row-item-card">
                  <span className="subTitle-info-card">Срок зачисления</span>
                  <span className="subTitle-info-card">В тот же день</span>
                </div>
              </div>
            </div>
          </div>
          <div className="more-div-block-small">
            <span
              className="title-info-card"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              Получение
            </span>
            <div className="row-content">
              <img src={Card} alt="Card" className="image-pay" />
              <img src={Layer} alt="Layer" className="image-pay" />
              <img src={Master} alt="Master" className="image-pay" />
              <img src={Visa} alt="Visa" className="image-pay" />
            </div>
          </div>
          <div className="more-div-block-small">
            <span
              className="title-info-card"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              Оплата
            </span>
            <div className="row-content">
              <img src={Master} alt="Master" className="image-pay" />
              <img src={Visa} alt="Layer" className="image-pay" />
              <img src={GooglePay} alt="Master" className="image-pay" />
            </div>
            <div className="row-content">
              <img src={Pay} alt="Card" className="image-pay" />
              <img src={Deal} alt="Layer" className="image-pay" />
              <img src={Bancontant} alt="Master" className="image-pay" />
              <img src={Trustly} alt="Visa" className="image-pay" />
            </div>
          </div>
        </div>
      )}
      <Button
        onClick={(e) => {
          e.preventDefault();
          window.open(`http://${site}`, "_blank", "noreferrer");
        }}
        className={"button-main-card-small"}
      >
        Перейти в{" "}
        {site.split(".")[0][0].toUpperCase() + site.split(".")[0].substring(1)}
      </Button>
    </div>
  );
}

export default BigCardPaymentSmall;
