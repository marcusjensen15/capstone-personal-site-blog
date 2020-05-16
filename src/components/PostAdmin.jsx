import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import '../styles/postAdminStyle.css';



export default function Post(props){


  return(
    <div className='textCenter'>
      <div className='postTextStyle'>


        <h2>{props.title}</h2>
        <h3>{props.topic}</h3>
        <h4>{props.date}</h4>
        <p>{props.content}</p>


        {console.log(props)}
        <button className='buttonStyle' onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) props.onDeleteAPost(props.id)}}>Delete Post</button>
      <button className='buttonStyle' onClick={() => props.onEditPost(props)}>  <Link to='/admin/edit' > Edit Post </Link></button>


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
