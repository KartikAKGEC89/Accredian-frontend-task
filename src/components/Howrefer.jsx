import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Circle from '../images/circle.png';
import Human from '../images/human.png';
import File from '../images/file.png';
import Wallet from '../images/wallet.png';

const Howrefer = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: "120%",
      width: '100%',
      backgroundColor: "rgba(238, 245, 255, 1)",
        '@media (max-width: 800px)': {
          top: '140%',
      },
        '@media (max-width: 700px)': {
          top: '160%',
        },
    }}>
      <p style={{ fontWeight: "bold", fontSize: "25px" }}>How Do I <span style={{ color: "rgba(26, 115, 232, 1)" }}>Refer?</span></p>
      <Box position="relative" display="inline-block">
        <img src={Circle} alt='circle' style={{maxWidth:"100%"}} />
        <Box display="flex" flexDirection="row" position="absolute" top="0" left="0" width="100%" height="100%">
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "46%",
            left: "21%",
            transform: "translate(-50%, -50%)",
            width: "120px",  
            height: "120px",  
            padding: "5px",  
            margin: "5px",
            '@media (max-width: 425px)': {
            width: "80px",  
            height: "80px",  
            padding: "5px",  
            margin: "5px",
        },
          }}>
            <Typography sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px"
            }}>
              <img src={Human} alt='human' width="30%" />
              <span style={{ fontSize: "100%", textAlign: "center" }}>Submit referrals easily via our website’s referral section.</span>
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "46%",
            left: "49%",
            transform: "translate(-50%, -50%)",
            width: "120px",  
            height: "120px",  
            padding: "5px",  
            margin: "5px",
            '@media (max-width: 425px)': {
            width: "80px",  
            height: "80px",  
            padding: "5px",  
            margin: "5px",
        }, 
          }}>
            <Typography sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px"
            }}>
              <img src={File} alt='file' width="30%" />
              <span style={{ fontSize: "100%", textAlign: "center" }}>Earn rewards once your referral joins an Accredian program.</span>
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "46%",
            left: "77%",
            transform: "translate(-50%, -50%)",
            width: "120px",  
            height: "120px",  
            padding: "5px",  
            margin: "5px",
            '@media (max-width: 425px)': {
            width: "80px",  
            height: "80px",  
            padding: "5px",  
            margin: "5px",
        },  
          }}>
            <Typography sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px"
            }}>
              <img src={Wallet} alt='wallet' width="30%" />
              <span style={{ fontSize: "100%", textAlign: "center" }}>Both parties receive a bonus 30 days after program enrollment.</span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button
        sx={{
          backgroundColor: "rgba(26, 115, 232, 1)",
          color: "white",
          fontWeight: "normal",
          marginBottom: "20px",
          marginTop: "20px",
          padding: "15px",
          '&:hover': {
            backgroundColor: 'white',
            color: "rgba(26, 115, 232, 1)",
          },
            '@media (max-width: 425px)': {
            marginTop: "30%", 
          },
        }}
      >
        Refer Now
      </Button>
    </Box>
  );
}

export default Howrefer