import React, { useMemo } from "react";
import CurrencyList from "currency-list";
import { InputLabel, MenuItem, Select, makeStyles } from "@material-ui/core";
import { ReactComponent as Down } from "../../assets/svgs/Down.svg";
import "../../App.css";
import "./Currency.css";
import { styles } from "./SelectCurrencyStyle";

const useStyles = makeStyles({
  select: {
    "&:before": {
      borderColor: "transparent",
    },
    "&:after": {
      borderColor: "transparent",
    },
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "transparent",
    },
  },
});
function SelectCurrency({
  value,
  setValue,
  label,
  currency,
  isMethod
}: {
  value: any;
  setValue: (value: string) => void;
  label?: string;
  currency?:any,isMethod?:boolean
}) {
  console.log("isMethod",isMethod)
  const currencyArray: any = currency;
  const changeHandler: any = (value: any) => {
    setValue(value.target.value);
  };
  const classes = useStyles();

  return (
    <>
      <InputLabel  className={'label'+' '+(isMethod?'method':'')}>{label}</InputLabel>
      <Select
        defaultValue={currency[0]}
        value={value ?? currency[0]}
        className={classes.select}
        IconComponent={() => <Down />}
        onChange={changeHandler}
        style={styles.select}
      >
        {currency.map((item: any, index: number) => {
          return (
            <MenuItem value={item} key={index} style={styles.menuItem}>
              <span style={{ marginLeft: 10 }}>{item}</span>
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}

export default SelectCurrency;
