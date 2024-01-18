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
interface IPayment {
  title: string;
  priceFrom: string;
  curse: string;
  isBig: boolean;
  size: string;
  toPrice: string;
  time: string;
}
function BigCardPayment({
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
  parcent,
  toCurrency,
  result
}: {
  image: any;
  status: string;
  commission: string;
  percentCommission: string;
  time: string;
  price: string;
  isBig: boolean;
  size: string;
  listPayment: IPayment[];
  feature: string;
  review: string;
  isMore: boolean;
  setIsMore: (value: boolean) => void;
  backgroundColor:string,
  site:string,
  fromCurrency:string,
  priceFrom:string,
  parcent:string,
  toCurrency:string
  result:string
}) {
  return (
    <div className="card-big">
      <div className="card-block">
        <div className="card-row">
          <div className="card-image" style={{ backgroundColor: backgroundColor,position:'relative'}}>
            {status&&<div style={{backgroundColor:'#644FE4',width:"50%",height:24,textAlign:"center",borderRadius:12,position:'absolute',top:-11,left:'25%'}}>
          <span style={{color:'white',fontSize:11}}>Рекомендовано </span>
            </div>}
            <img src={image} alt="icon-payment" width={"56.5%"} height={30} />
          </div>
          <div className="card-info-block">
            <div className="card-row">
              <span className="paymentName">{ site.split('.')[0][0].toUpperCase() + site.split('.')[0].substring(1)}</span>
            </div>
            <div className="card-row">
              <div style={{ marginRight: 60, textAlign: "left" }}>
                <span className="card-sub">Комиссия</span>
                <br />
                <span className="card-title">{commission} {fromCurrency}</span>
                <span className="card-sub">(1,208%)</span>
              </div>

              <div style={{ marginRight: 60, textAlign: "left" }}>
                <span className="card-sub">Срок зачисления</span>
                <br />
                <span className="card-title">В тот же день</span>
              </div>
              <div style={{ marginRight: 60, textAlign: "left" }}>
                <span className="card-sub">Отправьте ({fromCurrency})</span>
                <br />
                <span className="card-title price">{price} {fromCurrency}</span>
              </div>
            </div>
            <span>на ▼ 564.45 UAH меньше чем Wise</span>
          </div>
        </div>
 
        <Button
       onClick={(e) => {
        e.preventDefault();
        window.open(`http://${site}`, '_blank', 'noreferrer')
        }}
        className={"button-main-card"} 
        >Перейти в { site.split('.')[0][0].toUpperCase() + site.split('.')[0].substring(1)}
  
      </Button>
      </div>
      {isMore && (
        <div className="more-block">
          <div className="more-div-block " style={{justifyContent:"space-between",display:'flex',flexDirection:'column'}}>
            <div className="item-card">
              <div className="line" />
              <div className="info-big-card">
                <span className="title-info-card">Перевод на банковский счет</span>
                <div className="row-item-card">
                  <span className="subTitle-info-card">Вы отправляете</span>
                  <span className="subTitle-info-card">{price} {fromCurrency}</span>
                </div>
            
                <div className="row-item-card">
                  <span className="subTitle-info-card">Комиссия сервиса</span>
                  <span className="subTitle-info-card">{commission} {fromCurrency}</span>
                </div>
                <div className="row-item-card">
                  <span className="subTitle-info-card">Обменный курс</span>
                  <span className="subTitle-info-card">{result} {fromCurrency}</span>
                </div>
                <div className="row-item-card">
                  <span className="subTitle-info-card">Получаете <br />на ▼ 564.45 UAH меньше чем у Skrill</span>
                  <span className="card-title price" style={{fontSize:24}}>{priceFrom} {toCurrency}</span>
                </div>
                <div className="row-item-card">
                  <span className="subTitle-info-card">Срок зачисления</span>
                  <span className="subTitle-info-card">В тот же день</span>
                </div>
              </div>
            </div>
            <div className="item-card">
              <div className="line" />
              <div className="info-big-card">
                <span className="title-info-card">Перевод на банковский счет</span>
                <div className="row-item-card">
                  <span className="subTitle-info-card">Вы отправляете</span>
                  <span className="subTitle-info-card">{price} {fromCurrency}</span>
                </div>
            
                <div className="row-item-card">
                  <span className="subTitle-info-card">Комиссия сервиса</span>
                  <span className="subTitle-info-card">{commission} {fromCurrency}</span>
                </div>
                <div className="row-item-card">
                  <span className="subTitle-info-card">Обменный курс</span>
                  <span className="subTitle-info-card">{result} {fromCurrency}</span>
                </div>
                <div className="row-item-card">
                  <span className="subTitle-info-card">Получаете <br />на ▼ 0 UAH меньше чем у Skrill</span>
                  <span className="card-title price" style={{fontSize:24}}>{priceFrom} {fromCurrency}</span>
                </div>
                <div className="row-item-card">
                  <span className="subTitle-info-card">Срок зачисления</span>
                  <span className="subTitle-info-card">В тот же день</span>
                </div>
              </div>
            </div>
          </div>
          <div className="more-div-block">
            <div>
            <span className="title-info-card">Особенности сервиса</span><br/>
        <span className="subTitle-info-card" style={{marginTop:12}}>В соответствии с текущими ограничениями НБУ для денежных переводов на банковские карты и счета</span>
            </div>
       <div style={{marginTop:20,marginBottom:20}}>
       <span  className="title-info-card">Особенности сервиса</span><br/>
        <span className="subTitle-info-card" style={{marginTop:12}}>В соответствии с текущими ограничениями НБУ для денежных переводов на банковские карты и счета. В соответствии с текущими ограничениями НБУ для денежных переводов на банковские карты и счета</span>
       </div>
       <div className="row-content">
            <div >
              <span className="title-info-card" style={{marginTop:20,marginBottom:20}}>Получение</span>
              <div className="row-content">
              <img src={Card} alt="Card"className="image-pay" />
              <img src={Layer} alt="Layer" className="image-pay" />
              <img src={Master} alt="Master" className="image-pay"/>
              <img src={Visa} alt="Visa" className="image-pay"/>
              </div>
              <span className="title-info-card" style={{marginTop:20,marginBottom:20}}>Оплата</span>
              <div className="row-content"  >
              <img src={Master} alt="Master" className="image-pay"/>
              <img src={Visa} alt="Layer" className="image-pay"/>
              <img src={GooglePay} alt="Master" className="image-pay"/>
              </div>
              <div className="row-content"  >
              <img src={Pay} alt="Card" className="image-pay"/>
              <img src={Deal} alt="Layer" className="image-pay"/>
              <img src={Bancontant} alt="Master" className="image-pay"/>
              <img src={Trustly} alt="Visa" className="image-pay"/>
              </div>
            </div>
            <div>
            <span className="title-info-card" style={{marginTop:20,marginBottom:20}}>Полезные статьи</span><br/>

            <span className="text-decoration">Как получить вид на жительство ↗</span><br/>
            <span className="text-decoration">Покупка машины ↗</span><br/>
            <span className="text-decoration">Страховая медецина в Словакии ↗</span><br/>
            <span className="text-decoration">Ипотека с картой ВНЖ ↗</span><br/>
            <span className="text-decoration">ВНЖ на основании бизнеса ↗</span><br/>
            </div>
       </div>
          </div>
        </div>
      )}
      <span className="more-info" onClick={() => setIsMore(!isMore)}>
        {isMore ? "Показать меньше" : "Больше информации о переводе"}
      </span>
    </div>
  );
}

export default BigCardPayment;
