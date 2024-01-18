import React from "react";
import { TextField } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import SelectCurrency from "../selectCurrency/SelectCurrency";
import { styles } from "./TextInputStyle";
import "../../App.css"

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        "&:hover $notchedOutline": {
          borderColor: "transparent",
        },
        "&$focused $notchedOutline": {
          borderColor: "transparent",
        },
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0
        }
      },
      notchedOutline: {
        borderColor: "transparent",
      },
    },
  },
});

function TextInputWithSelect({
  value,
  setValue,
  fromCurrency,
  setFromCurrency,
  width,
  right,
  currency
}: {
  value: any;
  setValue: (value: string) => void;
  fromCurrency: string;
  width?:string;
  setFromCurrency: (value: string) => void;
  right?:string,
  currency:any
}) {
  return (
    <>
      <div
        style={{...styles.container,width:width?width:'71.3%',marginRight:right?right:0}}
      >
        <MuiThemeProvider theme={theme}>
          <TextField
            type='number'
            value={value}
            variant="outlined"
            InputProps={{
             style:styles.text
            }}
            style={styles.textInput}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setValue(event.target.value)
            }
          />
        </MuiThemeProvider>

        <SelectCurrency value={fromCurrency} setValue={setFromCurrency}
                  currency={currency}

        />
      </div>
    </>
  );
}

export default TextInputWithSelect;
