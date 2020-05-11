import React from 'react';
import Logo from '../images/ProduceMerchant.png'
import Logo2 from '../images/ProduceMerchantGold.png'
import '../styles/homeStyle.css'


export default function Home(){

  return(
    <div className="textCenter">
      <img className="logoStyle" src={Logo2}/>
      <div className="quoteContainer">
      <h4 className="marcusStyle"> Marcus Jensen</h4>
      <h4 className="quoteStyle"> Making something out of nothing</h4>
      </div>

    </div>
  );
}
