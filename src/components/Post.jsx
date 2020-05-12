import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/postStyle.css';


export default function Post(props){

  return(
    <div className="postContainer">
      <div className="postTextStyle">


        <h2>{props.title}</h2>
        <h3>{props.topic}</h3>
        <h4>{props.date}</h4>
        <p>{props.content}</p>




        {console.log(props)}



      </div>
    </div>
  );
}


Post.propTypes = {
  article: PropTypes.object,
  title: PropTypes.string
}
