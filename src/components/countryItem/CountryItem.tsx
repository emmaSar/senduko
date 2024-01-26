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
         <img
                  alt={image}
                  width={32}
                  height={24}
                  style={styles.image}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${image}.svg`}
                />
      <div style={styles.rightBlock}>
        <span style={styles.subTitle}>Как отправить деньги</span>
        <span style={styles.title}>из {country} в Украину</span>
      </div>
    </div>
  );
}

export default CountryItem;
