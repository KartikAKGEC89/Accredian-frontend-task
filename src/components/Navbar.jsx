import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../images/logo.png'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Typography variant="h6" component="div" sx={{
            flexGrow: 1

           }}>
            <div style={{display:"flex", flexDirection:"row"}}>
            <img src={Logo} alt="Logo" style={{ marginLeft: '10%', marginRight:"20px",maxWidth: '80%'}} />
            <Button
            sx={{
                backgroundColor: "rgba(26, 115, 232, 1)",
                color: "white", fontWeight: "normal",
                '&:hover': {
                        backgroundColor: 'white',
                        color: "rgba(26, 115, 232, 1)",
                  },'@media (max-width: 600px)': {
                      display:"none"
              },
            }}>Courses
          </Button>
          </div>
        </Typography>
            <Button
                sx={{
                    backgroundColor: "white",
                    color: "black", fontWeight: "normal", marginRight: "10px",'@media (max-width: 500px)': {
                      fontSize:"12px"
              },
                }}>Refer & Earn
            </Button>
            <Button
                sx={{
                    backgroundColor: "white",
                    color: "black", fontWeight: "normal",'@media (max-width: 500px)': {
                      fontSize:"12px"
              },
                }}>Resources
            </Button>
            <Button
                sx={{
                    backgroundColor: "white",
                    color: "black", fontWeight: "normal", marginRight: "10px",'@media (max-width: 500px)': {
                      fontSize:"12px"
              },
                }}>About us
            </Button>
            <Button
                sx={{
                    backgroundColor: "rgba(148, 163, 184, 0.2)",
              color: "black", fontWeight: "normal", marginRight: "10px",
                    '@media (max-width: 600px)': {
                      display:"none"
              },
                }}>Login
            </Button>
            <Button
                sx={{
                    backgroundColor: "rgba(26, 115, 232, 1)",
                    color: "white", fontWeight: "normal",
                    marginRight:"10%",
                    '&:hover': {
                        backgroundColor: 'white',
                        color: "rgba(26, 115, 232, 1)",
                  },'@media (max-width: 600px)': {
                      display:"none"
              },
                }}>Try for free
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
