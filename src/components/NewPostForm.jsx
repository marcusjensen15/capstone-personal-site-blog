import React from 'react';
import PropTypes from 'prop-types';


//will need to import new keg form

export default function NewPostForm(){

  let _title = null;
  let _date = null;
  let _topic = null;
  let _content = null;

  const textCenter = {
    textAlign: 'center',
    fontSize: '60px'
  }

  const newBeerHeader = {
  marginBottom: '4vh'
}

const formWrap = {
  backgroundColor: '#fcface',
  border: 'thick solid #fcface',
  borderRadius: '20px',
  padding: '0 40px',
  boxShadow: '-2px 10px 20px #40403F',
  color: 'black',
  marginLeft: '30%',
  marginRight: '30%',
  marginTop: '6%'
}

const listStyle = {
  listStyle: 'none'
}

const submitButtonStyle = {

  marginTop: '4%',
  border: 'none',
  textAlign: 'center',
  fontSize: '20px'

}

const buttonSize = {
  fontSize: '50px'
}
const inputPadding = {
  marginBottom: '60px'

}
const input = {
  width: '60%',
  marginTop: '2.5%'
}

function handleNewPostFormSubmission(event) {
  event.preventDefault();
  props.onPostCreation({name: _name.value, price: _price.value, brand: _brand.value, alcoholContent: _alcoholContent.value, id: v4(), kegVolume: 124});
  _name.value = '';
  _brand.value = '';
  _alcoholContent.value = '';
  _price.value = '';
}



  return(
    <div style={textCenter}>
          <div style={formWrap}>
            <h1 style={newBeerHeader}>Add a new post </h1>

            <form onSubmit={onPostCreation}>
              <input style={input}
                type='text'
                id='title'
                placeholder='Post Title'
                ref={(input) => {_title = input;}}/>
              <input style={input}
                type='text'
                id='date'
                placeholder='Date'
                ref={(input) => {_date = input;}}/>
              <input style={input}
                type='number'
                id='topic'
                placeholder='topic'
                ref={(input) => {_topic = input;}}/>
              <input style={input}
                id='content'
                type='text'
                placeholder='enter text content here'
                ref={(input) => {_content = input;}}/>
              <div  style={submitButtonStyle}>  <button style={buttonSize} type='submit'>Add Post</button> </div>
            </form>

          </div>
        </div>
  );
}

NewPostForm.propTypes = {
  onPostCreation: PropTypes.func
};
