import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export default function Post(props){



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

        <h3>Post Title: {props.title}</h3>
        <h4>Post Date: {props.date}</h4>
        <p>Post Topic: {props.topic}</p>
        <p>Post Content: {props.content}</p>
        <p>Post ID: {props.id}</p>
      </div>
    </div>
  );
}


Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
