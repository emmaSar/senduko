import React from "react";
import Right from '../../assets/svgs/Right.svg';
import DownCheveron from '../../assets/svgs/DownCheveron.svg';
import { styles } from "./AccordionStyle";

function Accordion({
  title,
  subTitle,
  isShow,
  onClick,
}: {
  title: string;
  subTitle: string;
  isShow: boolean;
  onClick: () => void;
}) {
  const style=isShow?styles.more:{}
  return (
    <div style={{...styles.container,...style}} onClick={onClick}>
      <div style={styles.row}>
      <span style={styles.title}>{title}</span>
      <img src={isShow?DownCheveron: Right} alt='Icon'/>
      </div>
      {isShow && <span style={styles.subTitle}>{subTitle}</span>}
    </div>
  );
}

export default Accordion;
