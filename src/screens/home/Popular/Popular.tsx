import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import ArrowUpRight from "../../../assets/svgs/ArrowUpRight.svg";
import Card from "../../../components/card/Card";
import { styles } from "./PopularStyle";
function Popular() {
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
        Популярные статьи из раздела
        <br /> денежные переводы.
      </span>
      <div style={styles.rowContainer}>
        <Card
          title="Как снять денги без карты"
          subTitle="Банкомат - самый простой и доступный способ снять деньги с карты. Большинство популярных банков устанавливают максимальную сумму, которую можно получить в банкомате.... "
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsmuyb4oFufA6743FFDxRX2qu6vnlmsDZv6qSCUjr&s"
          }
        />
        <Card
          title="Как перевести деньги из Украины в Польшу"
          subTitle="Банкомат - самый простой и доступный способ снять деньги с карты. Большинство популярных банков устанавливают максимальную сумму, которую можно получить в банкомате.... "
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsmuyb4oFufA6743FFDxRX2qu6vnlmsDZv6qSCUjr&s"
          }
        />
        <Card
          title="Как открыть виртуальную карту"
          subTitle="Банкомат - самый простой и доступный способ снять деньги с карты. Большинство популярных банков устанавливают максимальную сумму, которую можно получить в банкомате.... "
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsmuyb4oFufA6743FFDxRX2qu6vnlmsDZv6qSCUjr&s"
          }
        />
      </div>
      <Button style={{...styles.button,width:isSmallScreen?'56%':'28%'}}>
        Больше статей
        <img src={ArrowUpRight} alt="right" style={styles.image} />
      </Button>
    </div>
  );
}

export default Popular;
