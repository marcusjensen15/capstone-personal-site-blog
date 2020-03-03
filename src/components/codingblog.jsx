import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';






//will need to import new post form

export default function CodingBlog(props){

  const textCenter = {
    textAlign: 'center',
    fontSize: '60px'  }

    function openArticleCallback(id){
    props.onSetSelectedArticle(id);
    }


    //embed link to route within this loop.
    //I think we can remove the openArticle callback. it is refering to the selected article which isn't being used at all

    return(
      <div style={textCenter}>
        <p> These are my blog posts</p>
        <ul>
          {props.postList.map((post,index) =>
            <li onClick={() => {openArticleCallback(post.postid)}}>
              <DelayLink
                delay={2000}
                to={"/codingblog/"+ post.postid
              }> {post.title}
              </DelayLink>
            </li>
          )}



        </ul>




      </div>
    );
  }


  CodingBlog.propTypes = {
    postList:PropTypes.array,
    onSetSelectedArticle:PropTypes.func
  }
