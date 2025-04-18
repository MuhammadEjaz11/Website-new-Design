import React from "react";
import { Box, Typography } from "@mui/material";


const ServiceIconBox = ({ 
    iconURL = "",
     title = "",
     index = 0,
     style = {},
     sx1 = {},
     image = true
    }) => {
    return(
        <Box
        key={index}
        sx={{
          // flexBasis: { xs: '100%', sm: '48%', md: '31%' },
          borderRight: { md: index < 4 && "1px solid #F1F1F1 !Important" },
          borderBottom: { md:'none', xs: "1px solid #F1F1F1"},
          p:{md:"57px 30px", xs:"20px 20px"},
          marginBottom: { xs: '20px', md: '0' },
          textAlign: { xs: 'center', md: 'center' },
          ...style,
          ...sx1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'center' },
          }}
        >
          <Box imagesx={{
            display:'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }} >
          {
              image ? 
              <img src={iconURL} alt="Icon"  style={{ width: '50px', height: '50px', ...sx1 ,objectFit:"contain"}} />
              : ""
          }
          </Box>
          
        </Box>
        
        <Typography
          sx={{
            marginTop: '33px',
            color: '#1C1C1C',
            fontFamily: 'satoshi',
            fontSize: { md:'20px', xs:"18px" },
            fontWeight: 700,
            lineHeight: { xs: '28px', md: '36.99px' },
          }}
        >
          {title}
        </Typography>
        
        
      
      </Box>
    )
}

export default ServiceIconBox;