import Recat from "react";
import '../styles/Commercial.css';
import '../styles/navbarall.css';
import { Outlet, Link } from "react-router-dom";
import Back from '../assets/Commback.png';
import REL from '../assets/REL.jpeg';
import CTL from '../assets/CTL.jpeg';
import RLC from '../assets/RLC.jpeg';

import { styled, createTheme, ThemeProvider} from '@mui/material/styles';

import {useState} from 'react';
import {Button} from '@mui/material';
import { cyan } from '@mui/material/colors';


import { useEffect } from "react";

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

const Commercial=({})=> {

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
        <div className="text-img1">Commercial Banking</div>
        <p className="wwal">Custom solutions begin with custom thinking. <br></br>Work with a dedicated team that knows your industry</p>
        <img  src={Back} alt="Background" style={{ width: '100%', height: 550 }} />
                
        <section className="BA">
        
        <p className="wwa">Our Commercial Banking Solutions</p>
        
        <div className="rowb">
                <div className="columnb">
                <div className="whitecardb">
                    <div className="container" >
                    <img  src={REL} alt="icon" style={{ width: 70, height: 70 }} />
                        <p className="wwac" >COMMERCIAL REAL ESTATE LOANS</p> 
                        <br></br>
                        <p className="wwat">Real estate loans for owner and  <br></br> non-owner occupied properties, construction-to-permanent, <br></br> and refinancing.</p> 
                    </div>
                </div></div>
                <div className="columnb">
                <div className="whitecardb">
                    <div className="container">
                    <img  src={CTL} alt="icon" style={{ width: 70, height: 70 }} />
                        <p className="wwac" >COMMERCIAL TERM LOANS</p>
                        <br></br>
                        
                        <p className="wwat">We offer fixed asset purchases <br></br> for equipment and vehicles for<br></br> your business.</p> 
                    </div>
                </div></div>
                <div className="columnb">
                <div className="whitecardb">
                    <div className="container">
                    <img  src={RLC} alt="icon" style={{ width: 70, height: 70 }} />
                        <p className="wwac" >REVOLVING LINES OF CREDIT</p> 
                        <br></br>
                        
                        <p className="wwat">Gain easy access to cash for   <br></br> short-term capital, inventory purchases to meet seasonal, <br></br>  fluctuating cash demands.</p> 
                    </div>
                </div></div>
                
                </div>
      </section>
        </div>
        </body>
        </ThemeProvider>
        
        </>
    )

 }
 export default Commercial;
 