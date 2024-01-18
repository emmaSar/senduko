import React, { useEffect, useState } from "react";

import { styles } from "./CountryListStyle";
import CountryItem from "../../../components/countryItem/CountryItem";
function CountryList() {
  const countryList = [
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },

    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },

    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },

    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
    {
      image: "https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg",
      country: "Германии",
    },
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
        {countryList.map((item, index) => {
          return (
            <CountryItem
              image={item.image}
              country={item.country}
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
