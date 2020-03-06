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
    marginLeft: '32%',
    backgroundColor: '#DCD0C0',
    fontFamily: 'Ariel'

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




//add test route button
  return(
    <div style={textCenter}>
      <div style={postTextStyle}>


        <p>Props Title:{props.title}</p>
        <p>Props Title:{props.content}</p>
        <p>Props date:{props.date}</p>
        <p>Props topic:{props.topic}</p>


        {console.log(props)}



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
  title: PropTypes.string
  // postList:PropTypes.array
}
