import React, { useEffect, useState } from "react";

import { styles } from "./CountryListStyle";
import CountryItem from "../../../components/countryItem/CountryItem";
import { useSelector } from "react-redux";
import { countriesSelector } from "../../../store/selectors/main-selector";
function CountryList() {
  const list = useSelector(countriesSelector);

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
    <div style={isSmallScreen ? styles.smallContainer : styles.container}>
      <span
        style={{
          ...styles.header,
          fontSize: isSmallScreen ? 24 : 32,
          textAlign: isSmallScreen?"left":'center',
          marginLeft:isSmallScreen?40:0,
        }}
      >
        Найди лучший способ как переводить
        <br />
        деньги в Украину с sendyko.com
      </span>
      <div style={styles.block}>
        {Object.keys(list).map((item, index) => {
          return (
            <CountryItem
              image={item}
              country={list[item].name}
              onClick={() => {}}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CountryList;
