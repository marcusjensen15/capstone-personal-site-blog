import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import '../styles/editPostFormStyle.css';




//will need to import new keg form

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
            <h1 className="mainHeader">Edit a post </h1>

            <form onSubmit={handleNewPostFormSubmission}>
              <input className="input"
                type='text'
                id='title'
                defaultValue={props.editTitle}
                ref={(input) => {_title = input;}}/>
              <input className="input"
                type='text'
                id='date'
                defaultValue={props.editDate}
                ref={(input) => {_date = input;}}/>
              <input className="input"
                type='text'
                id='topic'
                defaultValue={props.editTopic}
                ref={(input) => {_topic = input;}}/>


              <textarea className="textareainput"
                id='content'
                type='text'
                defaultValue={props.editContent}
                ref={(input) => {_content = input;}}/>




              <div  className="submitButtonclassName">  <button className="buttonSize" type='submit'>Add Post</button> </div>
            </form>

          </div>
        </div>
  );
}

NewPostForm.propTypes = {
  onPostCreation: PropTypes.func,
  editContent: PropTypes.string,
  editDate: PropTypes.string,
  editTopic: PropTypes.string,
  editTitle: PropTypes.string,
};
