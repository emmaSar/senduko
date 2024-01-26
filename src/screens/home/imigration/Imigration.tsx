import React, { useEffect, useState } from "react";

import { styles } from "./ImigrationStyle";
import ListItem from "../../../components/listItem/ListItem";
import Colors from "../../../constants/Colors";
import ArrowUpRight from "../../../assets/svgs/ArrowUpRight.svg";
import Card from "../../../components/card/Card";
function Imigration() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const list = [
    "Как получить вид на жительство",
    "Покупка машины",
    "Страховая медецина в Словакии",
    "Ипотека с картой ВНЖ",
    "ВНЖ на основании бизнеса",
    "Больше статей",
  ];

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
        Популярные статьи из раздела
        <br /> Иммиграция.
      </span>
      <div style={styles.rowContainer}>
        <div style={{ ...styles.work, ...styles.firstBlock }}>
          {list.map((item, index) => {
            return (
              <ListItem
              key={index}
                title={item}
                backgroundColor={
                  index !== list.length - 1 ? "#D7D3F3" : "#7C4FE7"
                }
                titleColor={
                  index !== list.length - 1 ? Colors.darkBlue : "white"
                }
                onClick={() => {}}
                rightIcon={
                  index === list.length - 1 && (
                    <img src={ArrowUpRight} alt="right" />
                  )
                }
              />
            );
          })}
        </div>
        <Card
          title="Как получить ВНЖ в Германии"
          subTitle="Банкомат - самый простой и доступный способ снять деньги с карты. Большинство популярных банков устанавливают максимальную сумму, которую можно получить в банкомате.... "
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsmuyb4oFufA6743FFDxRX2qu6vnlmsDZv6qSCUjr&s"
          }

        />
     <Card
          title="Образование а Польше"
          subTitle="Банкомат - самый простой и доступный способ снять деньги с карты. Большинство популярных банков устанавливают максимальную сумму, которую можно получить в банкомате.... "
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsmuyb4oFufA6743FFDxRX2qu6vnlmsDZv6qSCUjr&s"
          }
        />
      </div>
    </div>
  );
}

export default Imigration;
