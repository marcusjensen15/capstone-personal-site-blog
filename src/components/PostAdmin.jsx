import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';




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

  //  deleteCallback(postid){
  //    props.onDeleteAPost(postid)
  // }





//need to replace console log with the delete function
  return(
    <div style={textCenter}>
      <div style={postTextStyle}>


        <p>Props Title:{props.title}</p>
        <p>Props Title:{props.content}</p>
        <p>Props date:{props.date}</p>
        <p>Props topic:{props.topic}</p>


        {console.log(props)}
        <button onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) props.onDeleteAPost(props.id)}}>Click here to delete post</button>
        <button onClick={() => props.onEditPost(props)}> edit post </button> 


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
  article: PropTypes.object,
  title: PropTypes.string,
  onDeleteAPost: PropTypes.func,
  onEditPost: PropTypes.func
  // postList:PropTypes.array
}
