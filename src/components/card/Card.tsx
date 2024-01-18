import React from "react";
import { styles } from "./CardStyle";

function Card({
  title,
  subTitle,
  image
}: {
  title: string;
  subTitle:string;
  image:any
}) {
  return (
    <div
      style={styles.container}
    ><div>
     <img src={image} alt={image} style={styles.image} />
    </div>
    <span style={styles.title}>{title}</span>
    <span style={styles.subTitle}>{subTitle}</span>
    </div>
  );
}

export default Card;
