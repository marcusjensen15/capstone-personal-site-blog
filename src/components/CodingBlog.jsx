import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import '../styles/codingBlogStyles.css'


export default function CodingBlog(props){


    return(
      <div className="textCenter">
        <h2 className="headerColor">Blog</h2>

          {props.postList.map((post,index) =>
            <p>
              <DelayLink
                delay={2000}
                to={"/codingblog/"+ post.postid
              }> {post.title}
              <p className="topicStyle">Topic: {post.topic}</p>

              </DelayLink>
            </p>
          )}
      </div>
    );
  }


  CodingBlog.propTypes = {
    postList:PropTypes.array,
    onSetSelectedArticle:PropTypes.func
  }
