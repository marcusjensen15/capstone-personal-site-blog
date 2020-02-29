import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export default function Post({match}, props){



  var postTextStyle = {
    fontSize: '50px',
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '2%',
    border: '6px solid #eee',
    marginRight: '32%',
    marginBottom: '2%',
    marginLeft: '32%'

  }
  var textCenter = {
    color: 'black'
  }

  const buttonStyle ={

    height: '3vh',

    paddingTop: '1%',
    paddingBottom: '1%',
    marginTop: '4%',
    fontSize: '40%'
  }




//add test route button
  return(
    <div style={textCenter}>
      <div style={postTextStyle}>


        <p>Params test id: {match.params.id}</p>
        <p>Props test value: {props.test}</p>

      </div>
    </div>
  );
}


Post.propTypes = {
  // title: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  // topic: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  test: PropTypes.number
  // postList:PropTypes.array
}
