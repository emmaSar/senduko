/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { ListItemText, MenuItem,Select } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    select: {
        '&:before': {
            borderColor: 'transparent',
        },
        '&:after': {
            borderColor: 'transparent',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'transparent',
        },
    },

})

export function Language(): JSX.Element {

    const optionValues = [
        {
            title:'Eng',
            short_name: "eng"
        },
        {
            title:'Ru',
            short_name: "ru"
        },
      
        {
            title: 'Arm',
            short_name: "am"
        }
    ];
    const [value, setvalue] = useState(optionValues[0].short_name)
 
    const classes = useStyles()
    const checkValue=()=>{
        return optionValues.find((element:any)=>element.short_name===value)
    }
    return (
        <div>
            <Select
                //style={{ backgroundColor: "#3f51b5",borderWidth:"5px",borderColor:"red"}}
                value={checkValue()}
                className={classes.select}
                renderValue={
                (value: any) => {
                    return (<div style={{ alignItems: "center" ,opacity:1}}>
                       <ListItemText
                            primary={value.title}
                        />
                    </div>
                    );
                }}
                onChange={(event:any) => {
                    setvalue(event.target.value);
                }}
            >
                {optionValues.map(item => (
                    <MenuItem key={item.title} value={item.short_name}>
                       
                        <ListItemText
                            primary={item.title}
                        />
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}
