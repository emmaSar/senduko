import React, { useEffect, useMemo, useState } from "react";
import { InputLabel, MenuItem, ListItemIcon, Select } from "@material-ui/core";
import "../../App.css";
import { styles } from "./SelectCountryStyle";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as Down } from "../../assets/svgs/Down.svg";
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
    "& .MuiInputBase-root.Mui-disabled": {
      color: "green" // (default alpha is 0.38)
    }
  },
});
function SelectCountry({
  value,
  setValue,
  label,
  width,right,
  list,
  disabled
}: {
  value: any;
  label: string;
  setValue: (value: string) => void;
  width?:string,
  right?:string,
  list:any,
  disabled?:boolean
}) {
  const classes = useStyles();
  const countryArray: any = list;
  const changeHandler: any = (value: any) => {
    setValue(value.target.value);
  };
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
    <div style={isSmallScreen?{width:'100%',marginBottom:4}: {width:width?width:'49.5%',marginRight:right?right:0}}>
      <InputLabel style={styles.label}>{label}</InputLabel>
      <Select
        className={classes.select}
        value={value}
        onChange={changeHandler}
        style={styles.select}
        disabled={disabled}
        IconComponent={() => <Down />}
      >
        {Object.keys(list).map(
          (value: any, index: number) => {
            console.log(list[value].name,"list[value].name")
            return (
              <MenuItem
                value={value}
                key={index}
                style={styles.menuItem}
              >
                <img
                  alt={value}
                  width={32}
                  height={24}
                  style={{ borderRadius: 30 }}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${value}.svg`}
                />
                <span style={{ marginLeft: 10 ,color:'#011A3F'}}>{list[value].name}</span>
              </MenuItem>
            );
          }
        )}
      </Select>
    </div>
  );
}

export default SelectCountry;
