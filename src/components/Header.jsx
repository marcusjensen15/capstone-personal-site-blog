import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  const headerStyle = {
    textAlign: 'center',
    paddingTop: '3%',
    fontSize: '3vh',
    backgroundColor: '#F4F4F4',
    fontFamily: 'Ariel',
    fontColor: '#373737',
    textDecoration: 'none',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'auto',
    justifyItems: 'center'
  }

  const noUnderline ={
    textDecoration: 'none',
    width: '30%',
    height: '40%',
  }

  const hrStyle = {
    marginTop: "2%",
  }

  return(
    <div style={headerStyle}>
        <Link style ={noUnderline} to='/resume'> Resumé</Link>
          <Link style ={noUnderline} to='/'> Home</Link>
            <Link style ={noUnderline} to='/codingblog'> Code Blog</Link>



            <div style={hrStyle}><hr/></div>
          </div>
        );
      }
