import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import '../styles/adminStyles.css';


export default function Admin(props){


  return(
    <div className="textCenter">
      <h2 className="headerColor">ADMIN PORTAL</h2>
      <h2 className="headerColor">Blog</h2>
        <div className="textCenter">

            {props.postList.map((post,index) =>
              <p className="blogTitleList">
                <Link
                  to={"/admin/"+ post.postid
                }> {post.title}
                    <p className="topicStyle">Topic: {post.topic}</p>
                </Link>
              </p>

            )}

        </div>

          <div className="linkStyle"><Link  to='/admin/newpostform'> Create a new post </Link></div>



    </div>
  );
}

Admin.propTypes = {

  clickTest: PropTypes.func,
  onPostCreation: PropTypes.func,
  postList:PropTypes.array


}
