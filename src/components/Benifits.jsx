import React from 'react';
import Dot from '../images/Eclipse.png';
import RightArrowWhite from '../images/White.png';
import RightArrowBlack from '../images/Black.png';
import Cap from '../images/Cap.png';
import './Benifits.css';
import { Button } from '@mui/material';

const ReferralComponent = () => {

  return (
    <div style={{marginTop:"100%"}}>
      <div className='benefits-container'>
        <p className='benefits-title'>What Are The <span className='highlight'>Referral Benefits?</span></p>
      </div>

      <div className='enrolled-container'>
          <p className='enrolled-text'>Enrolled</p>
        <div className='enrolled-status'>
          <div className='enrolled-dot'>
            <img src={Dot} alt="Dot" />
          </div>
        </div>
      </div>

      <div className='programs-container'>
        <div className='programs-list'>
          <div className='programs-content'>
            <div className='program-item' style={{
              backgroundColor: "rgba(26, 115, 232, 1)",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
              boxSizing: "border-box",
              }}>
              <p className='program-text' style={{color:"white"}}>ALL PROGRAMS</p>
              <img src={RightArrowWhite} alt="" />
            </div>
            <div className='program-item'>
              <p className='program-text'>Product Management</p>
              <img src={RightArrowBlack} alt="" />
            </div>
            <div className='program-item'>
              <p className='program-text'>Strategy & Leadership</p>
              <img src={RightArrowBlack} alt="" />
            </div>
            <div className='program-item'>
              <p className='program-text'>Business Management</p>
              <img src={RightArrowBlack} alt="" />
            </div>
            <div className='program-item'>
              <p className='program-text'>Fintech</p>
              <img src={RightArrowBlack} alt="" />
            </div>
            <div className='program-item'>
              <p className='program-text'>Senior Management</p>
              <img src={RightArrowBlack} alt="" />
            </div>
            <div className='program-item'>
              <p className='program-text'>Data Science</p>
              <img src={RightArrowBlack} alt="" />
            </div>
            <div className='program-item'>
              <p className='program-text'>Digital Transformation</p>
              <img src={RightArrowBlack} alt="" />
            </div>
            <div className='program-item'>
              <p className='program-text'>Business Analytics</p>
              <img src={RightArrowBlack} alt="" />
            </div>
          </div>
        </div>
        <div className='programs-table'>
<table className='table'>
  <thead className='table-header'>
    <tr>
      <th className='table-header-cell' style={{
        color:"rgba(19, 80, 160, 1)",
        fontWeight:"bold",
        fontSize:"25px"
      }}><p className='table-header-title'>Programs</p></th>
      <th className='table-header-cell' style={{
        color:"rgba(19, 80, 160, 1)",
        fontWeight:"bold",
        fontSize:"25px"
      }}>Referrer Bonus</th>
      <th className='table-header-cell' style={{
        color:"rgba(19, 80, 160, 1)",
        fontWeight:"bold",
        fontSize:"25px"
      }}>Referee Bonus</th>
    </tr>
  </thead>
  <tbody className='table-body'>
    <tr className='table-row'>
      <td className='table-cell'>
        <img src={Cap} alt="Cap" className='table-cell-icon' />
        Professional Certificate Program in Product Management
      </td>
      <td className='table-cell'>₹ 7,000</td>
      <td className='table-cell'>₹ 9,000</td>
    </tr>
    <tr className='table-row'>
      <td className='table-cell'>
        <img src={Cap} alt="Cap" className='table-cell-icon' />
        PG Certificate Program in Strategic Product Management
      </td>
      <td className='table-cell'>₹ 9,000</td>
      <td className='table-cell'>₹ 11,000</td>
    </tr>
    <tr className='table-row'>
      <td className='table-cell'>
        <img src={Cap} alt="Cap" className='table-cell-icon' />
        Executive Program in Data Driven Product Management
      </td>
      <td className='table-cell'>₹ 10,000</td>
      <td className='table-cell'>₹ 10,000</td>
    </tr>
    <tr className='table-row'>
      <td className='table-cell'>
        <img src={Cap} alt="Cap" className='table-cell-icon' />
        Executive Program in Product Management and Digital Transformation
      </td>
      <td className='table-cell'>₹ 10,000</td>
      <td className='table-cell'>₹ 10,000</td>
    </tr>
    <tr className='table-row'>
      <td className='table-cell'>
        <img src={Cap} alt="Cap" className='table-cell-icon' />
        Executive Program in Product Management
      </td>
      <td className='table-cell'>₹ 10,000</td>
      <td className='table-cell'>₹ 10,000</td>
    </tr>
    <tr className='table-row'>
      <td className='table-cell'>
        <img src={Cap} alt="Cap" className='table-cell-icon' />
        Advanced Certification in Product Management
      </td>
      <td className='table-cell'>₹ 10,000</td>
      <td className='table-cell'>₹ 10,000</td>
    </tr>
    <tr className='table-row'>
      <td className='table-cell'>
        <img src={Cap} alt="Cap" className='table-cell-icon' />
        Executive Program in Product Management and Project Management
      </td>
      <td className='table-cell'>₹ 10,000</td>
      <td className='table-cell'>₹ 10,000</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
      <Button
        sx={{
          backgroundColor: "white",
          color: "black",
          fontWeight: "normal",
          marginBottom: "20px",
          padding: "10px",
          left: "85%",
          border:"1px solid",
          '&:hover': {
            backgroundColor: 'white',
            color: "rgba(26, 115, 232, 1)",
          },
            '@media (max-width: 425px)': {
            marginTop: "30%", 
          },
        }}
      >
        Show More
      </Button>
      <Button
        sx={{
          backgroundColor: "rgba(26, 115, 232, 1)",
          color: "white",
          fontWeight: "normal",
          marginBottom: "20px",
          marginTop: "5%",
          padding: "15px",
          left:"50%",
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
    </div>
  );
};

export default ReferralComponent;