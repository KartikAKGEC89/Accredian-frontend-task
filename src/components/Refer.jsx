import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import Display from '../images/Anniversary.png';
import Cash from '../images/cash.png';
import Cash3 from '../images/cash3.png';
import Cash2 from '../images/cash2.png';
import Cash4 from '../images/cash4.png';

const Refer = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1150px)');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(26, 115, 232, 0.11)',
        width: '80vw',
        marginTop: "15px",
        position: 'absolute',
        top: '70%',
        borderRadius: "50px",
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '@media (max-width: 1400px)': {
          top: '72%',
        },
        '@media (max-width: 1250px)': {
          top: '80%',
        },
        '@media (max-width: 700px)': {
          top: '100%',
          flexDirection: "column"
        },
      }}>
      <div>
        <Box
        component="img"
        src={Cash}
        alt="Cash"
        sx={{width: isSmallScreen ? '80px' : 'auto', }}
      />
        <div style={{ padding: "30px" }}>
          <Typography
            sx={{
              fontSize: "80px",
              fontWeight: "bold",
              marginBottom: "10px",
              '@media (max-width: 1150px)': {
                fontSize: "60px",
              },
              '@media (max-width: 700px)': {
                fontSize: "40px",
              },
            }}
          >
            Let’s Learn & Earn
          </Typography>
          <Typography
            sx={{
              fontSize: "50px",
              marginTop: "0px",
              '@media (max-width: 1150px)': {
                fontSize: "30px",
              },
              '@media (max-width: 700px)': {
                fontSize: "20px",
              },
            }}
          >
            Get a chance to win up-to
            <span style={{
              color: "rgba(26, 115, 232, 1)",
              fontWeight: "bold",
              justifyContent: "space-between"
            }}> Rs. 15,000</span>
          </Typography>
          <Button
            sx={{
              backgroundColor: "rgba(26, 115, 232, 1)",
              color: "white",
              fontWeight: "normal",
              marginBottom: "20px",
              marginTop:"20px",
              padding: "15px",
              '&:hover': {
                backgroundColor: 'white',
                color: "rgba(26, 115, 232, 1)",
              }
            }}
          >
            Refer Now
          </Button>
        </div>
      </div>
       <Box position="relative" display="inline-block">
      <Box
        component="img"
        src={Cash3}
        alt="Cash3"
        sx={{ marginLeft: '75%', maxWidth: '95%',width: isSmallScreen ? '80px' : 'auto', }}
      />
      <Box
        component="img"
        src={Display}
        alt="Display money"
        sx={{ maxWidth: '95%', marginBottom: 0 }}
      />
      <Box
        component="img"
        src={Cash2}
        alt="cash"
        sx={{
          position: 'absolute',
          top: '40%',
          left: '80%',
          maxWidth: '80%',
          width: isSmallScreen ? '80px' : 'auto',
        }}
      />
      <Box
        component="img"
        src={Cash4}
        alt="cash"
        sx={{
          position: 'absolute',
          top: '72%',
          left: '2%',
          maxWidth: '80%',
          width: isSmallScreen ? '80px' : 'auto',
        }}
      />
    </Box>
    </Box>
  )
}

export default Refer;
