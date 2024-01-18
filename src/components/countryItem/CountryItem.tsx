import React from "react";
import { styles } from "./CountryItemStyle";

function CountryItem({
  image,
  country,
  onClick,
}: {
  image: string;
  country: string;
  onClick: () => void;
}) {
  return (
    <div style={styles.container} onClick={onClick}>
      <img src={image} alt={"country"} style={styles.image} />
      <div style={styles.rightBlock}>
        <span style={styles.subTitle}>Как отправить деньги</span>
        <span style={styles.title}>из {country} в Украину</span>
      </div>
    </div>
  );
}

export default CountryItem;
