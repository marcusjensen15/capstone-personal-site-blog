import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';




//will need to import new keg form

export default function NewPostForm(props){

  let _title = null;
  let _date = null;
  let _topic = null;
  let _content = null;

  const textCenter = {
    textAlign: 'center'
    }

  const newBeerHeader = {
  marginBottom: '4vh'
}

const formWrap = {
  // backgroundColor: '#fcface',
  // border: 'thick solid #fcface',
  // borderRadius: '20px',
  // padding: '0 40px',
  // boxShadow: '-2px 10px 20px #40403F',
  // color: 'black',
  // marginLeft: '30%',
  // marginRight: '30%',
  // marginTop: '6%',
  // marginBottom: '5%'
  backgroundColor: '#DCD0C0',
  border: 'thick solid #373737',
  borderRadius: '2%',
  boxShadow: '-2px 1% 2% #40403F',
  color: 'black',
  marginLeft: '20%',
  marginRight: '20%',
  marginTop: '6%',
  marginBottom: '5%'
}

const listStyle = {
  listStyle: 'none'
}

const submitButtonStyle = {

  marginTop: '4%',
  border: 'none',
  textAlign: 'center',
  fontSize: '2vh',
  marginBottom: '2%'

}

const buttonSize = {
  fontSize: '3vh',
  fontFamily: 'Ariel'
}
const inputPadding = {
  marginBottom: '60px'

}
const input = {
  width: '60%',
  marginTop: '2.5%'
}

const textareainput = {
  width: '60%',
  marginTop: '2.5%',
  height: '50vh'

}

function handleNewPostFormSubmission(event) {
  event.preventDefault();
  props.onPostCreation({title: _title.value, date: _date.value, topic: _topic.value, content: _content.value, postid: v4()});
  _title.value = '';
  _date.value = '';
  _topic.value = '';
  _content.value = '';
}



  return(
    <div style={textCenter}>
          <div style={formWrap}>
            <h1 style={newBeerHeader}>Edit a post </h1>

            <form onSubmit={handleNewPostFormSubmission}>
              <input style={input}
                type='text'
                id='title'
                defaultValue={props.editTitle}
                ref={(input) => {_title = input;}}/>
              <input style={input}
                type='text'
                id='date'
                defaultValue={props.editDate}
                ref={(input) => {_date = input;}}/>
              <input style={input}
                type='text'
                id='topic'
                defaultValue={props.editTopic}
                ref={(input) => {_topic = input;}}/>


              <textarea style={textareainput}
                id='content'
                type='text'
                defaultValue={props.editContent}
                ref={(input) => {_content = input;}}/>




              <div  style={submitButtonStyle}>  <button style={buttonSize} type='submit'>Add Post</button> </div>
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
