import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



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

    height: '3vh',

    paddingTop: '1%',
    paddingBottom: '1%',
    marginTop: '4%',
    fontSize: '40%'
  }
  return(
    <div style={textCenter}>
      <div style={postTextStyle}>


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
