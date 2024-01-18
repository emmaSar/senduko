import React from "react";
import Proffe from "../../../assets/svgs/profee.svg";
import Wise from "../../../assets/svgs/Wise.svg";
import Transfergo from "../../../assets/svgs/Transfergo.svg";
import Skrill from "../../../assets/svgs/Skrill.svg";
import MoneyGram from "../../../assets/svgs/MoneyGram.svg";
import Revolut from "../../../assets/svgs/Revolut.svg";
import Western from "../../../assets/svgs/Western.svg";
import Remitly from "../../../assets/svgs/Remitly.svg";
import Paysend from "../../../assets/svgs/Paysend.svg";
import KoronaPay from "../../../assets/svgs/KoronaPay.svg";
import Spoko from "../../../assets/svgs/Spoko.svg";
import Zen from "../../../assets/svgs/Zen.svg";
import Bunq from "../../../assets/svgs/Bunq.svg";
import N26 from "../../../assets/svgs/N26.svg";
import Starling from "../../../assets/svgs/Starling.svg";
import Curve from "../../../assets/svgs/Curve.svg";
import Tommorow from "../../../assets/svgs/Tommorow.svg";
import Monzo from "../../../assets/svgs/Monzo.svg";

import  "./PaymentsStyle.css";

function Payments() {
  const images = [
    Wise,
    Transfergo,
    Skrill,
    MoneyGram,
    Remitly,
    Revolut,
    Western,
    Paysend,
    KoronaPay,
    Proffe,
    Spoko,
    Zen,
    Bunq,
    N26,
    Starling,
    Curve,
    Tommorow,
    Monzo
  ];
  return (
    <div className={'container-payment'}>
      {images.map((item: any, index) => {
        return (
          <div key={index} className={'image-payment'+ ' ' +(index===0?'first-payment':'')} >
            <img src={item} alt={item} />
          </div>
        );
      })}
    </div>
  );
}

export default Payments;
