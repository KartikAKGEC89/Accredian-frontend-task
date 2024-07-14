import { Box, Button, Typography, useMediaQuery, Modal, TextField } from '@mui/material';
import React from 'react';
import Display from '../images/Anniversary.png';
import Cash from '../images/cash.png';
import Cash3 from '../images/cash3.png';
import Cash2 from '../images/cash2.png';
import Cash4 from '../images/cash4.png';

const Refer = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1150px)');
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSubmitSuccess(false);
  };
  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [referrename, setreferrename] = React.useState('');
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleSubmit = () => {
    const formData = {
      name: name,
      email: email,
      referrename: referrename
    };

    fetch('http://127.0.0.1:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
        setSubmitSuccess(true); 
      } else {
        console.error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error occurred while submitting the form:', error);
    });
  };

  const resetForm = () => {
    setname('');
    setemail('');
    setreferrename('');
    setSubmitSuccess(false);
  };

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
              marginTop: "20px",
              padding: "15px",
              '&:hover': {
                backgroundColor: 'white',
                color: "rgba(26, 115, 232, 1)",
              }
            }}
            onClick={handleOpen}
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
    <Modal
      open={open}
      onClose={() => {
        handleClose();
        resetForm();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {!submitSuccess ? (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Refer a Friend
            </Typography>
            <TextField
              label="Referrer Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              label="Referrer Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              label="Referee Name"
              variant="outlined"
              fullWidth
              value={referrename}
              onChange={(e) => setreferrename(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </>
        ) : (
          <Box textAlign="center">
            <Typography variant="h6">Success!</Typography>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
    </Box>
  )
}

export default Refer;
