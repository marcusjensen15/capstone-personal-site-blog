import React from 'react';

//will need to import new keg form

export default function Resume(){

  const textCenter = {
    textAlign: 'center',
    textAlign: 'center',
    fontSize: '2vh',
    marginRight: '28%',
    marginBottom: '2%',
    marginLeft: '28%',
    backgroundColor: '#DCD0C0',
    fontFamily: 'Ariel',
    borderRadius: '5%'
  }

  const titleStyle = {
    paddingBottom: '3vh'
  }
  const nameStyle = {
    paddingTop: '5vh'

  }

  return(
    <div style={textCenter}>
      <h2 style={nameStyle}>Marcus Jensen</h2>
      <h4 style={titleStyle}>Software Engineer</h4>

    </div>
  );
}
