import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css'

export default function Header(){

  // origional blog was:

  // <Link className ="noUnderline" to='/codingblog'>Blog</Link>



  return(
    <div className="headerStyle">
        <Link className ="noUnderline" to='/resume'> Resumé</Link>
          <Link className ="noUnderline" to='/'> Home</Link>
            <a className ="noUnderline" href='https://www.marcusjensen.me'>Blog</a>


            <div className="hrStyle"><hr/></div>
          </div>
        );
      }
