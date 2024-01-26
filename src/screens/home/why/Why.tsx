import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./WhyStyle.css";

function Why() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
  return (
    <div className={"container-why"}>
      {!isSmallScreen && <div className={"block-why background-why"}></div>}
      <div className={"block-why"}>
        <span className={"header-why"}>
          Почему Sendyko облегчит Вам <br /> жизнь и сэкономит деньги
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:isSmallScreen?'center':''
          }}
        >
          {isSmallScreen && <div className={"block-why background-why"}></div>}
          <span className={"text-why"}>
            "Больше, чем просто денежный перевод: как стать героем семьи, не
            выходя из дома"
            <br /> Мы живем в эпоху, где отправка SMS считается знаком внимания,
            а перевод денег родителям,  родственникам или друзьям в Украину –
            это почти как супер геройский поступок. Но почему бы не сделать этот
            героизм еще более впечатляющим, выбрав сервис, который не только
            доставит ваши деньги, но и сэкономит?
            <br /> Экономия – новый черный!
            <br />
            Согласно исследованиям, использование небанковских сервисов для
            переводов может сэкономить вам от 5 до 15% от суммы. Это уже почти
            целый
          </span>
          <Button className={"button-why"}>Читать больше!</Button>
        </div>
      </div> 
    </div>
  );
}

export default Why;
