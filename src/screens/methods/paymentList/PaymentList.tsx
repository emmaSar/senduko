import React, { useState } from "react";
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
import { paymentListSelector, valueSelector } from "../../../store/selectors/main-selector";

function PaymentList() {
  const [isMore, setIsMore] = useState(false);
  const paymentList = useSelector(paymentListSelector);
  const value=useSelector(valueSelector)
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
        return '#FFF4DF'
      case "koronapay.com":
        return '#D7EEF8';
      case "profee.com":
        return '#ECECFB';
      case "zen.com":
        return '#EFEFEF';
      case "transfergo.com":
        return '#F7F4D0';
        case "skrill.com":
        return '#F5E8F2';
        case "paysend.com":
          return '#F0E6FE';
      default:
        return '#DAECCB';
    }
  };
  return (
    <div style={{ marginTop: 60, marginLeft: 100, marginRight: 100 }}>
      {paymentList.map((item: any, index: number) => {
      return item.get_amount>0&& (
          <BigCardPayment
          priceFrom={value}
          status={index===0?'Рекомендовано':''}
          site={item.site}
          result={item.result}
            key={index}
            image={returnImage(item.site)}
            // status="Рекомендовано"
            commission={item?.commission}
            percentCommission="(1%)"
            time="В тот же день"
            price={item.get_amount}
            parcent={item.percent}
            isBig={true}
            size="555"
            listPayment={[]}
            feature="sav"
            review="scasc"
            isMore={isMore}
            setIsMore={setIsMore}
            backgroundColor={returnColor(item.site)}
            fromCurrency={item.from_currency}
            toCurrency={item.to_currency}
          />
        );
      })}
    </div>
  );
}
export default PaymentList;
