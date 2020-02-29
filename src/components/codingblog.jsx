import React from 'react';

//will need to import new post form

export default function CodingBlog(){

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


Admin.propTypes = {
  postList=PropTypes.array
}
