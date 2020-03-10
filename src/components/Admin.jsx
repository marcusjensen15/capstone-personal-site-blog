import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';



//will need to import new keg form

export default function Admin(props){

  const textCenter = {
    textAlign: 'center',
    fontSize: '4vh',
    backgroundColor: '#F4F4F4',
    fontFamily: 'Ariel',
    fontColor: '#373737',
    marginTop: '0px'
  }

  const headerColor = {
    fontColor: '#373737'

  }

  const topicStyle = {
    fontSize: '2vh',
    fontFamily: 'Ariel',
    fontStyle: 'bold'
  }

  const linkStyle = {

    marginBottom: '3vh'
  }




  return(
    <div style={textCenter}>
      <h2 style={headerColor}>ADMIN PORTAL</h2>
      <h2 style={headerColor}>Blog</h2>
        <div style={textCenter}>

            {props.postList.map((post,index) =>
              <p>
                <DelayLink
                  delay={2000}
                  to={"/admin/"+ post.postid
                }> {post.title}
                    <p style={topicStyle}>Topic: {post.topic}</p>
                </DelayLink>
              </p>

            )}

        </div>

          <div style={linkStyle}><Link  to='/admin/newpostform'> Create a new post </Link></div>



    </div>
  );
}

Admin.propTypes = {

  clickTest: PropTypes.func,
  onPostCreation: PropTypes.func,
  postList:PropTypes.array


}
