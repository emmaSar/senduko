import React from "react";
import { styles } from "./ListItemStyle";

function ListItem({
  title,
  rightIcon,
  onClick,
  backgroundColor,
  titleColor
}: {
  title: string;
  rightIcon?: any;
  backgroundColor: string;
  onClick: () => void;
  titleColor:string
}) {
  return (
    <div
      style={{ ...styles.container, backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      <span style={{...styles.title,color:titleColor}}>{title}</span>
      <div style={styles.rightBlock}>
      {rightIcon&&rightIcon}
      </div>
    </div>
  );
}

export default ListItem;
