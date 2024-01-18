import React from "react";
import "./CardPaymentStyle.css";

function CardPayment({
  title,
  image,
  price,
  margin,
  isGood,
  fromCurrency
}: {
  title: string;
  image:any,
  price:string,
  margin?:boolean,
  isGood?:boolean,
  fromCurrency:string
}) {
  return (
    <div
      className={`container`+ ' '+ (isGood?'good':'')}
      style={{marginLeft:margin?20:0,marginRight:margin?20:0}}
    >
      {isGood&&<div className="goodButton"><span className="goodTitle">Лучшее предложение</span></div>}
     <img src={image} alt={image} className="img" />
     <span className="subTitle">Перевод</span>
     <span className="title-card-payment">{title}</span>
    <span className="price">{price} {fromCurrency}</span>
    </div>
  );
}

export default CardPayment;
