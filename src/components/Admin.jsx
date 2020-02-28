import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



//will need to import new keg form

export default function Admin(props){

  const textCenter = {
    textAlign: 'center',
    fontSize: '60px'
  }


  return(
    <div style={textCenter}>
      <p> This is the admin portal</p>
        <button  onClick={() => {props.clickTest()}} > Pint Sold </button>

          <Link  to='/admin/newpostform'> Create a new post </Link>


    </div>
  );
}

Admin.propTypes = {

  clickTest: PropTypes.func
}
