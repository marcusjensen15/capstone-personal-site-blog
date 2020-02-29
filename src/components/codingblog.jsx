import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { Link } from 'react-router-dom';





//will need to import new post form

export default function CodingBlog(props){

  const textCenter = {
    textAlign: 'center',
    fontSize: '60px'  }


//embed link to route within this loop.

  return(
    <div style={textCenter}>
      <p> These are my blog posts</p>
      <ul>
      {props.postList.map((post,index) =>
      <li>  <Link to={'codingblog/' + post.id}> {post.title} </Link> </li>
    )}



      </ul>




    </div>
  );
}


CodingBlog.propTypes = {
  postList:PropTypes.array
}
