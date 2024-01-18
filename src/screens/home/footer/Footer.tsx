import React, { useEffect, useState } from "react";
import SendykoDark from "../../../assets/svgs/SendykoDark.svg";
import "./FooterStyle.css";
import Icon from '../../../assets/svgs/Icon.svg'

function Footer() {
  const moneyTransfers = [
    "wise",
    "transfergo",
    "profee",
    "paysend",
    "spoko",
    "skrill",
    "revolut",
    "zen",
    "westernunion",
    "moneygram",
    "koronapay",
    "remitly",
  ];
  const onlineBanks = [
    "revolut",
    "zen",
    "wise",
    "bunq",
    "n26",
    "monice",
    "monzo",
    "starling bank",
    "curve",
    "tomorrow",
    "vivid money",
  ];
  const sendykoList = [
    " О нас",
    "Как это раборает",
    "Стать автором",
    "Сотрудничество",
  ];
  const imegration = [
    " Жизнь в Польше",
    "Жизнь в Германии",
    "Жизнь в Словакии",
    "Жизнь в Чехии",
    "Жизнь в Венгрии",
    "Жизнь в Австрии",
    "Жизнь в Великобритании",
    "Жизнь в Норвегии",
    "Жизнь в Канаде",
    "Жизнь в Италии",
    "Жизнь в Испании",
    "Жизнь в Швейцарии",
  ];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1150px)");
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
  return (
    <div className={'container-footer'}>
      <div style={{display:isSmallScreen?'none':'block'}}>
        <img src={SendykoDark} alt={"Sendyko"} />
      </div>
        <div className={'block-footer'}>
          <span className={'title-footer'}>Денежные переводы</span>
          {moneyTransfers.map((item, index) => {
            return (
              <span className={'text-footer'} key={index}>
                {item}
              </span>
            );
          })}
        </div>
        <div className={'block-footer'}>
          <span className={'title-footer'}>Онлайн банки</span>
          {onlineBanks.map((item, index) => {
            return (
              <span className={'text-footer'} key={index}>
                {item}
              </span>
            );
          })}
        </div>
        <div className={'block-footer'}>
          <span className={'title-footer'}>Sendyko.com</span>
          {sendykoList.map((item, index) => {
            return (
              <span className={'text-footer'} key={index}>
                {item}
              </span>
            );
          })}
        </div>
        <div className={'block-footer'}>
          <span className={'title-footer'}>Иммиграция</span>
          {imegration.map((item, index) => {
            return (
              <span className={'text-footer'} key={index}>
                {item}
              </span>
            );
          })}
        </div>
     { isSmallScreen&&  <div >
          <img src={Icon} style={{marginRight:80}} alt='icon app' />
          <span className={'text-footer'} >
          © 2024 Sendyko All Rights Reserved.
              </span>
        </div>}
    </div>
  );
}

export default Footer;
