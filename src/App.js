// App Fundamentals
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components

import Home from './components/Home';
// import Keg from './components/Keg';
import About from './components/About';
import Resume from './components/Resume';
import CodingBlog from './components/CodingBlog';
import Admin from './components/Admin';



import Header from './components/Header';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      editKegId: null,
      editKegVol: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.editAKeg = this.editAKeg.bind(this);
    this.sellAPint = this.sellAPint.bind(this);

  }

  async  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    await  this.setState({masterKegList: newMasterKegList});
    console.log(this.state.masterKegList);
  }

  async editAKeg(id){
    var newMasterKegList = this.state.masterKegList;
    var newEditKegId = this.state.editKegId;
    var newEditKegVol = this.state.editKegVol;
    newEditKegId = id;
    await this.setState({editKegId: newEditKegId});

    for(var i = 0; i < newMasterKegList.length; i++){

      if(typeof newMasterKegList[i] != "undefined" && newMasterKegList[i].id === id){
        newEditKegVol = newMasterKegList[i].kegVolume;
        await this.setState({editKegVol: newEditKegVol});
        console.log(this.state)

        delete newMasterKegList[i];

        console.log(newMasterKegList);
      }
    }
  }

  testThing(){
    var bacon = this.id;
    console.log(bacon);
  }

  async sellAPint(id){
    var newMasterKegList = this.state.masterKegList;
    for (var i = 0; i < newMasterKegList.length; i++) {
      if(typeof newMasterKegList[i] != "undefined" && newMasterKegList[i].id === id){
        newMasterKegList[i].kegVolume -= 1;
      }
    }
    await  this.setState({masterKegList: newMasterKegList});
    console.log(this.state.masterKegList);
  }

  //experiemnting with edit keg route.
  //About and Resume can be static, no need for arrow function


  render(){

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/codingblog' render={()=><CodingBlog />} />
          <Route exact path='/admin' render={()=><Admin />} />



        </Switch>
      </div>
    );
  }
}



export default App;
