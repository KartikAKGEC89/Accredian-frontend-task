import React from 'react'
import { Link, Box } from '@mui/material'


const Slider = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        background: 'rgba(26, 115, 232, 0.11)',
        width: '40vw',
        position: 'absolute',
        top: '20%',
        borderRadius:"50px",
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '@media (max-width: 700px)': {
            width: '80vw',
            top: '30%',
              },
        '@media (max-width: 500px)': {
            width: '80vw',
            top: '30%',
        },
      }}
    >
      <Link href="#underline" sx={{ textDecoration: 'none', color:"black", '&:focus': { textDecoration: 'dot', color:'rgba(26, 115, 232, 1)' } }}>
        Refer
      </Link>
       <Link href="#underline" sx={{ textDecoration: 'none', color:"black", '&:focus': { textDecoration: 'dot', color:'rgba(26, 115, 232, 1)' }, marginLeft: '15px' }}>
        Benefits
      </Link>
     <Link href="#underline" sx={{ textDecoration: 'none', color:"black", '&:focus': { textDecoration: 'dot', color:'rgba(26, 115, 232, 1)' }, marginLeft: '15px' }}>
        FAQs
      </Link>
     <Link href="#underline" sx={{ textDecoration: 'none', color:"black", '&:focus': { textDecoration: 'dot', color:'rgba(26, 115, 232, 1)' }, marginLeft: '15px' }}>
        Support
      </Link>
    </Box>
  )
}

export default Slider
