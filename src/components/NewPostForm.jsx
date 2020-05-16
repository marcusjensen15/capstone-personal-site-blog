import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import '../styles/newPostFormStyle.css';
import { withRouter } from 'react-router-dom';


export default function NewPostForm(props){

  let _title = null;
  let _date = null;
  let _topic = null;
  let _content = null;

function handleNewPostFormSubmission(event) {
  event.preventDefault();
  props.onPostCreation({title: _title.value, date: _date.value, topic: _topic.value, content: _content.value, postid: v4()});
  _title.value = '';
  _date.value = '';
  _topic.value = '';
  _content.value = '';
}



  return(
    <div className="textCenter">
          <div className="formWrap">
            <h2>Add New Post </h2>

            <form onSubmit={handleNewPostFormSubmission}>
              <input className="input"
                type='text'
                id='title'
                placeholder='Post Title'
                ref={(input) => {_title = input;}}/>
              <input className="input"
                type='text'
                id='date'
                placeholder='Date'
                ref={(input) => {_date = input;}}/>
              <input className="input"
                type='text'
                id='topic'
                placeholder='topic'
                ref={(input) => {_topic = input;}}/>


              <textarea className="textareainput"
                id='content'
                type='text'
                placeholder="content area"
                ref={(input) => {_content = input;}}/>




              <div  className="submitButtonStyle">  <button className="buttonSize" type='submit'>Add Post</button> </div>
            </form>

          </div>
        </div>
  );
}

NewPostForm.propTypes = {
  onPostCreation: PropTypes.func
};
