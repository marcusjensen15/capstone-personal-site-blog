import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  const navLinks = {
    textAlign: 'center',
    paddingTop: '3%',
    fontSize: '2vh'
  }

  const noUnderline ={
    textDecoration: 'none'

  }

  const hrStyle = {
    marginTop: "2%",


  }

  return(
    <div style={navLinks}>
      <Link style ={noUnderline} to='/about'> About</Link> |
        <Link style ={noUnderline} to='/resume'> Resumé</Link> |
          <Link style ={noUnderline} to='/'> Home</Link> |
          <Link style ={noUnderline} to='/codingblog'> Coding Blog</Link>



          <div style={hrStyle}><hr/></div>
        </div>
      );
    }
