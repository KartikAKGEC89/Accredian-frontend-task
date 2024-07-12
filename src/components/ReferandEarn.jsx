import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import { Box } from '@mui/material'

const ReferandEarn = () => {
  return (
    <>
          <Box
          sx={{
          backgroundColor: 'rgba(26, 115, 232, 0.15)', display: 'flex',
          flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
          padding: '10px', fontWeight: 'bold'
            }}>
            Navigate your ideal career path with tailored expert advice <span 
            style={{marginLeft:'5px', color:"rgba(26, 115, 232, 1)"}}>Contact Expert</span>  
      </Box>
      <Navbar />
      <Slider />
    </>
  )
}

export default ReferandEarn
