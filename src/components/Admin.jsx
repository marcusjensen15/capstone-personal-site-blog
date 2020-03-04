import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';



//will need to import new keg form

export default function Admin(props){

  const textCenter = {
    textAlign: 'center',
    fontSize: '60px'
  }

  var noDots= {
    listStyle: 'none'
  }


  return(
    <div style={textCenter}>
      <p> This is the admin portal</p>


        <div style={textCenter}>
          <p> These are my blog posts</p>
          <ul style={noDots}>
            {props.postList.map((post,index) =>
              <li>
                <DelayLink
                  delay={2000}
                  to={"/admin/"+ post.postid
                }> {post.title}
                </DelayLink>
              </li>
            )}



          </ul>




        </div>


          <Link  to='/admin/newpostform'> Create a new post </Link>


    </div>
  );
}

Admin.propTypes = {

  clickTest: PropTypes.func,
  onPostCreation: PropTypes.func,
  postList:PropTypes.array


}
