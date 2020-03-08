import React from 'react';
import Logo from '../images/ProduceMerchant.png'

//will need to import new keg form

export default function Home(){

  const textCenter = {
    textAlign: 'center',
    fontSize: '4vh',
    backgroundColor: '#F4F4F4',
    fontFamily: 'Ariel',
    fontColor: '#373737',
    marginTop: '0px',
    postion: 'relative'
  }

  const marcusStyle = {
    color: '#373737',
    fontFamily: 'Ariel',
    fontSize:'3vh',
    float: 'left',
    paddingLeft: '2vw'
    // postion: 'absolute'
  }

  const quoteStyle = {
    color: '#373737',
    fontFamily: 'Ariel',
    fontSize:'3vh',
    float: 'right',
    paddingRight: '2vw',
    // postion: 'absolute'
  }

  const quoteContainer = {
    marginBottom: '0px',
    marginTop: '4vh'
  }

  const logoStyle = {
    position: 'relative',
    width: '35%',
    height: 'auto'

  }


  return(
    <div style={textCenter}>
      <img style = {logoStyle} src={Logo}/>
      <div style={quoteContainer}>
      <h4 style={marcusStyle}> Marcus Jensen</h4>
      <h4 style={quoteStyle}> Making something out of nothing</h4>
      </div>

    </div>
  );
}
