import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import "../../App.css";
import { styles } from "./ButtonGroupStyle";

function ButtonGroupComponent({
  isSender,
  setIsSender,
}: {
  isSender: Boolean;
  setIsSender: (val: boolean) => void;
}) {
  return (
    <div>
      <ButtonGroup style={styles.group}>
        <Button
          onClick={() => setIsSender(true)}
          style={isSender ? styles.selectedButton : styles.button}
        >
          Отправить
        </Button>
        <Button
          onClick={() => setIsSender(false)}
          style={!isSender ? styles.selectedButton : styles.button}
        >
          Получить
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default ButtonGroupComponent;
