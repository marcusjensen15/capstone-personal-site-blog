import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';






//will need to import new post form

export default function CodingBlog(props){

  const textCenter = {
    textAlign: 'center',
    fontSize: '4vh',
    backgroundColor: '#F4F4F4',
    fontFamily: 'Ariel',
    fontColor: '#373737',
    marginTop: '0px'

  }

    // function openArticleCallback(id){
    // props.onSetSelectedArticle(id);
    // }

  var noDots= {
    listStyle: 'none'
  }

    //embed link to route within this loop.
    //I think we can remove the openArticle callback. it is refering to the selected article which isn't being used at all

    return(
      <div style={textCenter}>
        <p> These are my blog posts</p>
        <ul style={noDots}>
          {props.postList.map((post,index) =>
            <li >
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
