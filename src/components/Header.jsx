import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css'

export default function Header(){

  return(
    <div className="headerStyle">
        <Link className ="noUnderline" to='/resume'> Resumé</Link>
          <Link className ="noUnderline" to='/'> Home</Link>
            <Link className ="noUnderline" to='/codingblog'> Code Blog</Link>



            <div className="hrStyle"><hr/></div>
          </div>
        );
      }
