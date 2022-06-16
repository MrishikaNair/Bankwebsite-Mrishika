import Recat from "react";
import '../styles/Personal.css';
import { Outlet, Link } from "react-router-dom";
import loan from '../assets/loan.jpeg';
import check from '../assets/check.jpeg';
import save from '../assets/save.jpeg';
import Back from '../assets/Perback.png';

import { styled, createTheme, ThemeProvider} from '@mui/material/styles';

import {useState} from 'react';
import {Button} from '@mui/material';
import { cyan } from '@mui/material/colors';
import REL from '../assets/REL.jpeg';

import Select from 'react-select';



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

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const Personal=({})=> {

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
        <img  src={Back} alt="Background" style={{  width: '100%' , height: 550 }} />
                
        
        </div>
    
        <section className="tasks">
            <p className="wwa">What would you like to do?</p>
            <div className="rowb">
                <div className="columnb">
                
                    <div className="container" >
                    <img  src={check} alt="icon" style={{ width: 80, height: 80 }} />
                    <Link to="/checking"><p className="wwac" >GET A CHECKING ACCOUNT</p></Link> 
                    
                </div></div>
                <div className="columnb">
                
                    <div className="container" >
                    <img  src={save} alt="icon" style={{ width: 80, height: 80 }} />
                        <p className="wwac" >BEGIN SAVING</p> 
                    
                </div></div>
                
                <div className="columnb">
                
                    <div className="container" >
                    <img  src={loan} alt="icon" style={{ width: 80, height: 80 }} />
                        <p className="wwac" >GET A LOAN</p> 
                    
                </div></div>
            </div>
                        
            
        </section>
            
                
        </body>
        </ThemeProvider>
        
        </>
    )

 }
 export default Personal;