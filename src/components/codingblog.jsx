import React from 'react';
import PropTypes from 'prop-types';
import Post from './components/Post';



//will need to import new post form

export default function CodingBlog(props){

  const textCenter = {
    textAlign: 'center',
    fontSize: '60px'
  }


  return(
    <div style={textCenter}>
      <p> These are my blog posts</p>
      <ul>
      {props.postList.map((post,index) =>
      <Post title={post.title}
        brand= {post.date}
        price= {post.topic}
        alcoholContent={post.content}
        postVolume={post.postVolume}
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
