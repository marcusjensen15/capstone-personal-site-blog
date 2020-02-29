import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';



//will need to import new post form

export default function CodingBlog(props){

  const textCenter = {
    textAlign: 'center',
    fontSize: '60px'  }




  return(
    <div style={textCenter}>
      <p> These are my blog posts</p>
      <ul>
      {props.postList.map((post,index) =>
      <Post 
        title={post.title}
        date={post.date}
        topic={post.topic}
        content={post.content}
        id={post.id}
        />
    )}



      </ul>




    </div>
  );
}


CodingBlog.propTypes = {
  postList:PropTypes.array
}
