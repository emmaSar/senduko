import React, { useEffect, useState } from "react";

import { styles } from "./SliderComponentStyle";
import Slider from "../../../components/slider/Slider";
import data from "./data";
function SliderComponent() {
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
    <div style={isSmallScreen?styles.smallContainer: styles.container}>
      <span style={{...styles.header,fontSize:isSmallScreen?24:32}}>
      Обзоры сервисов 
        <br />
        денежных переводов
      </span>
      <span style={styles.subTitle}>Мировые лидеры международных денежных переводов!</span>
      <Slider
      activeSlide={2}
      data={data}
      />
    </div>
  );
}

export default SliderComponent;
