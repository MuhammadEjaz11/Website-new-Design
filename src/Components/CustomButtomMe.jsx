import { Button } from '@mui/material';
import React from 'react';
// import { LoaderW } from '../Loaders'; // Adjust the import path as needed
const CustomButtonMe = ({
    border = "",
    borderRadius = "",
    buttonTextStyle = {},
    buttonStyle = {},
    ButtonText = "",
    fontSize = "16px",
    color = "",
    fontWeight = "700",
    fullWidth = false,
    variant = "outlined",
    padding = "",
    onClick = () => {},
    background = "",
    hoverBg = "",
    hovercolor = "",
    type = "",
    width,
    loading = false,
    hoverBorder = "",
    height = "",
    extraText
}) => {
    return (
        <Button
            variant={variant} 
            fullWidth={fullWidth}
            onClick={onClick}
            disabled={loading}
            type={type}
            
            sx={{
                border: border,
                borderRadius,
                padding,
                fontSize,
                color,
                background ,
                fontWeight,
                width,
                height,
                textTransform: "none",  // Ensures the text is displayed as provided
                ...buttonStyle,
                '&:hover': {
                    background: hoverBg,
                    color: hovercolor,
                    border: hoverBorder
                }
            }}
            
        >
            {ButtonText}
            {/* {loading ? <LoaderW color="white" /> : ButtonText} */}
            {extraText?<h4>{extraText}</h4>:null}
        </Button>
    );
}
export default CustomButtonMe;
