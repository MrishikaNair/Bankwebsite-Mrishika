import React from "react";
import '../styles/Checking.css';
import family from '../assets/family.jpeg';
import { Outlet, Link } from "react-router-dom";
import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import {Button} from '@mui/material';
import { cyan } from '@mui/material/colors';
import { color } from "@mui/system";

import Box from '@material-ui/core/Box';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: cyan['A100'],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#0e0707'
      },
    },
  });
const Checking=({})=> {

    return(
        <>
        <ThemeProvider theme={theme}>
        <body>
        <div className="container">
        <section id="navbar">
          <div id='nav'>
            
            {/*<Link to="/Categories"></Link>*/}
            <br></br>
            <Button>Investing</Button>
            <Link to="/commercial"><Button>Commercial</Button></Link>
            <Link to="/business"><Button>Business</Button></Link>
            <Link to="/personal"><Button>Personal</Button></Link>
            <Link to="/alogin"><Button>About</Button></Link>
            
               
        
        </div>
        
        
        </section>
        <div className="text-img2">Get started with <br></br>simple and secure<br></br></div><div className="emp">Checking Accounts</div>
        
        <img  className="img" src={family} alt="Background" style={{ marginTop:80,float:'right' ,width: 700 , height: 450 }} />
                
        
        </div>
        <section className="box">
         
          <div id='nav a'>
            
            {/*<Link to="/Categories"></Link>*/}
            <br></br>
            <Button>SAVINGS CALCULATOR</Button>
            <Button>OVERDRAFT PROTECTION</Button>
            <Button>RATES</Button>
            <Button>FAQs</Button>
            <Button>CONTACTLESS DEBIT CARD</Button>
            <Button>COMPARE ACCOUNTS</Button>
            <Button>ACCOUNT TYPES</Button>
  
        
        </div>
        

        </section>
        
    
        
            
                
        </body>
        </ThemeProvider>
        
        </>
    )

 }
 export default Checking;