import './styles/App.css';
import './styles/navbar.css';
import './styles/cover.css';
import './styles/Business.css';
import Business from './components/Business';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { BrowserRouter as Router, Link, NavLink, Route, Switch,Navigate } from "react-router-dom";

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@material-ui/icons/Home';


import Select from 'react-select'

import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import Back from './assets/Background.png';
import React from 'react';
import {useState} from 'react';
import {Button} from '@mui/material';
import { cyan } from '@mui/material/colors';


import { useEffect } from "react";


const options = [
  {
  value:'grow my money',label:'grow my money',
  value:'prevent fraud',label:'prevent fraud',
  value:'work on my credit',label:'work on my credit',
    }
]
const MyComponent = () => (
  <Select options={options} />
)

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


const App=() =>{

  useEffect(()=> {
    document.title="Bank-Home";
    
  },[]);
  const [active, setActive]=useState("About");
 
  return(
    <>
    
    <ThemeProvider theme={theme}>
    
    
    <div className='container'>
      
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
        
        <img  src={Back} alt="Background" style={{ width: '100%', height: 760 }} />
        
        

        <div className="card">
          
            <div id="card-title">
              <h2>LOGIN</h2>
              <br></br>
        
          </div>
          <form>
            <div className='p-5'>
            <br></br>
            <input id="user-email" className="inpbox" type="username" placeholder='Username' autoComplete="on" required />
            </div>
            <div className='mb-2'>
            <br></br>
            <input id="password" className="inpbox" type="password" placeholder='Password'  required />
            </div>

            <p><Link to='/alogin'><input className="sub-btn" type="submit" name="submit" value="LOGIN" /></Link></p>
        
        </form>
      </div>
      <div className="text-img">New Bank for <br></br> a New Age</div>
      <section className="A">
        <p className="wwa">Who we are</p>
        <p className="wwat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br></br>
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      </section>

      <section className="B">
      <p className="wwa">Our Services</p>

      <div className="row" >
            <div className="column">
            <div className="whitecard">
                <div className="container" >
                  <p className="wwac" >PERSONAL <br></br> BANKING</p> 
                  <br></br>
                    <p className="wwat">Checking, savings, loans <br></br> and more from locals, here  <br></br>to help in-person or online.</p> 
                </div>
            </div></div>
            <div className="column">
            <div className="whitecard">
                <div className="container">
                  <p className="wwac" >SMALL BUSINESS <br></br>BANKING</p>
                    
                  <br></br>
                    <p className="wwat">Checking, savings, loans <br></br> and more from locals, here  <br></br>to help in-person or online.</p> 
                </div>
            </div></div>
            <div className="column">
            <div className="whitecard">
                <div className="container">
                  <p className="wwac" >COMMERCIAL <br></br>BANKING</p> 
                    
                  <br></br>
                    <p className="wwat">Checking, savings, loans <br></br> and more from locals, here  <br></br>to help in-person or online.</p> 
                </div>
            </div></div>
            <div className="column">
            <div className="whitecard">
                <div className="container">
                  <p className="wwac" >WEALTH <br></br>MANAGEMENT</p> 
                    
                  <br></br>
                    <p className="wwat">Checking, savings, loans <br></br> and more from locals, here  <br></br>to help in-person or online.</p> 
                </div>
            </div></div>
            
            </div>
      </section>

      
      </div>
      <div className="footer-basic">
        <footer>
            <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">About</a></li>
                <li className="list-inline-item"><a href="/personal">Personal</a></li>
                <li className="list-inline-item"><a href="/business">Business</a></li>
                <li className="list-inline-item"><a href="/commercial">Commercial</a></li>
                <li className="list-inline-item"><a >Investing</a></li>
                
            </ul>
            <p className="copyright">Bank Website</p>
        </footer>
    </div>
    

      
      </ThemeProvider>
      
    </>
);
}

export default App;
