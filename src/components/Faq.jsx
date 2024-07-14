import React, { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const Faq = () => {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState("Eligibility");

  const categories = ["Eligibility", "How To Use?", "Terms & Conditions"];

  const faqs = {
    Eligibility: [
      {
        question:
          "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer:
          "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        question: "What is the minimum system configuration required?",
        answer:
          "A computer with a stable internet connection is sufficient for accessing our online learning platform.",
      },
    ],
    "How To Use?": [
      {
        question: "What is the minimum system configuration required?",
        answer:
          "A computer with a stable internet connection is sufficient for accessing our online learning platform.",
      },
    ],
    "Terms & Conditions": [
      
    ],
  };

   const [expandedIndex, setExpandedIndex] = useState(-1); 

  const handleAccordionChange = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index); 
  };

  return (
    <Box id="faqs" style={{marginTop:"5%", padding: theme.spacing(8, 0),}}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom style={{fontWeight:"bold"}}>
          Frequently Asked <span style={{color:"rgba(26, 115, 232, 1)"}}>Questions</span>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            {categories.map((category) => (
              <Button
                key={category}
                fullWidth
                sx={{
                  color: activeCategory === category ? "#3385ff" : "rgba(115, 115, 115, 1)",
                  border: activeCategory === category ? "thin solid rgba(115, 115, 115, 0.5)" : "none",
                  textAlign: "left",
                  justifyContent: "center",
                  borderRadius: theme.shape.borderRadius / 2,
                  marginBottom: theme.spacing(1),
                  padding: theme.spacing(2),
                  boxShadow: activeCategory === category ? "0px 2px 4px rgba(0, 0, 0, 0.8)" : "0px 1px 2px rgba(0, 0, 0, 0.5)",
                  backgroundColor: activeCategory === category ? 'white' : 'initial',
                  "&:hover": {
                    backgroundColor: activeCategory === category ? 'white' : 'rgba(245, 245, 245, 1)',
                  },
                }}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </Grid>
          <Grid item xs={12} md={9}>
      {faqs[activeCategory].map((faq, index) => (
        <Accordion
          key={index}
          expanded={index === expandedIndex}
          onChange={() => handleAccordionChange(index)}
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
            sx={{
              padding: 0,
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: index === expandedIndex ? 'rgba(26, 115, 232, 1)' : 'black',
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.87)",
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
        </Grid>
        <Box sx={{
        backgroundColor: '#3385ff',
        padding: theme.spacing(6),
        borderRadius: theme.shape.borderRadius,
        marginTop: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media (max-width: 500px)': {
          flexDirection: "column",
          padding:"10px"
        },
        }}>
          <Box display="flex" alignItems="center">
            <HeadsetMicIcon sx={{
                marginRight: theme.spacing(2),
                fontSize: '2.5rem',
                padding:"10px",
                backgroundColor:"rgba(255, 255, 255, 1)",
                border:"thin",
                borderRadius:"5px",
                color: "rgba(26, 115, 232, 1)",
            }} />
            <Box>
              <Typography variant="h6" sx={{
                color:"rgba(255, 255, 255, 1)",
                fontSize:"25px",
                fontWeight:"bold",
                marginBottom:"6px"
              }}>Want to delve deeper into the program?</Typography>
              <Typography variant="body2" sx={{
                color:"rgba(255, 255, 255, 1)",
              }}>Share your details to receive expert insights from our program team!</Typography>
            </Box>
          </Box>
          <Button sx={{
            backgroundColor:"rgba(255, 255, 255, 1)",
            color: "rgba(59, 130, 246, 1)",
            '&:hover': {
              backgroundColor:"black",
              color: "rgba(59, 130, 246, 1)",
            }
          }}>
            Get in touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;