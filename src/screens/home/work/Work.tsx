import React, { useEffect, useState } from "react";
import { styles } from "./WorkStyle";

function Work() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const works = [
    {
      image: "",
      text: "Выберите направление перевода и укажите сумму которую хотите отправить, а так же валюту в которой вы хотите получить деньги. При необходимости укажите удобный способ оплаты.",
    },
    {
      image: "",
      text: "Мы проведем анализ среди самых популярных сервисов международных денежных переводов. Сравним актуальные курсы и комиссии.",
    },
    {
      image: "",
      text: "В результате Вы получите самый выгодный сервис для  перевода денег в Украину. Повторяйте процедуру каждый раз перед отправкой денег, лидеры меняются ежедневно!",
    },
  ];

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
    <div style={{...styles.container,marginTop:isSmallScreen?60:0}}>
      <span style={styles.header}>Как это работает?</span>
      <div
        style={{
          ...styles.block,
          padding: isSmallScreen
            ? "60px 16px 120px 16px"
            : "60px 100px 120px 100px",
        }}
      >
        {works.map((work, index) => {
          return (
            <div style={styles.work} key={index}>
              <div style={styles.image}></div>
              <span style={styles.text}>{work.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
