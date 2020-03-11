import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';




export default function Post(props){



  var postTextStyle = {
    fontSize: '2vh',
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '2%',
    border: '6px solid #eee',
    marginRight: '32%',
    marginBottom: '2%',
    marginLeft: '32%',
    backgroundColor: '#DCD0C0',
    fontFamily: 'Ariel',
    borderRadius: '5%',
    textAlign: 'center'

  }
  var textCenter = {
    color: '#373737'
  }

  const buttonStyle ={

    border: 'none',
    padding: '0.5vh',
    margin: '2vh',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '2vh',
    fontColor: '#373737'
  }

  return(
    <div style={textCenter}>
      <div style={postTextStyle}>


        <h2>{props.title}</h2>
        <h3>{props.topic}</h3>
        <h4>{props.date}</h4>
        <p>{props.content}</p>


        {console.log(props)}
        <button style={buttonStyle} onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) props.onDeleteAPost(props.id)}}>Delete Post</button>
      <button style={buttonStyle} onClick={() => props.onEditPost(props)}>  <DelayLink delay={2000} to='/admin/edit' > Edit Post </DelayLink></button>


      </div>
    </div>
  );
}


Post.propTypes = {
  article: PropTypes.object,
  title: PropTypes.string,
  onDeleteAPost: PropTypes.func,
  onEditPost: PropTypes.func
}
