import React, { useEffect, useState } from "react";
import Main from "./main/Main";
import Payments from "./payments/Payments";
import Work from "./work/Work";
import Why from "./why/Why";
import Answers from "./answers/Answers";
import Imigration from "./imigration/Imigration";
import Popular from "./Popular/Popular";
import CountryList from "./CountryList/CountryList";
import SliderComponent from "./sliderComponent/SliderComponent";
import RightVector from "../../assets/svgs/RightVector.svg";
import LeftVector from "../../assets/svgs/LeftVector.svg";
import { styles } from "./HomePageStyle";
import TextComponent from "./main/TextComponent";

function HomePage() {
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
    <div>
      <Main />
      <Payments />
      {isSmallScreen && <TextComponent />}
      <Work />
     <Why />
      <div style={{ position:"relative" }}>
        <SliderComponent />
        {!isSmallScreen && (
          <img src={RightVector} alt="alt" style={styles.rightVector} />
        )}
        {!isSmallScreen && (
          <img src={LeftVector} alt="right" style={styles.leftVector} />
        )}
        <CountryList />
      </div>

      <Popular />

      <Imigration />
       <Answers />
    </div>
  );
}

export default HomePage;
