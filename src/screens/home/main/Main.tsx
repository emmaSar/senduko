import React, { useEffect, useState } from "react";
import Block from "./Block";
import "./MainStyle.css";

function Main() {
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
    <div className={"container-main"}>
      <div className={"leftBlock-main"}>
        <span className={"heading-main"}>
          Сравнение сервисов{" "}
          <span className={"heading1-main"}>
            международных {!isSmallScreen && <br />}
            денежных
          </span>{" "}
          переводов
        </span>
        {!isSmallScreen && (
          <span className={"text-main"}>
            Мы проведем анализ среди самых популярных <br /> сервисов
            международных денежных переводов.
            <br />
            Сравним актуальные курсы и комиссии.
          </span>
        )}
        {!isSmallScreen && (
          <a href="#" className={"textLink-main"}>
            Читайте о нас
          </a>
        )}
      </div>
      <Block />
    </div>
  );
}

export default Main;
