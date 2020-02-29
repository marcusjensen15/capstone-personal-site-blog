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
import NewPostForm from './components/NewPostForm';
import Header from './components/Header';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
  }

 handleAddingNewPostToList = async (newPost) => {
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    await this.setState({masterPostList: newMasterPostList});
    console.log(this.state.masterPostList);
  }

  clickTest = () => {
    console.log('the button was clicked');

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
          <Route exact path='/codingblog' render={()=><CodingBlog
              postList={this.state.masterPostList}/>}
              />
          <Route exact path='/admin' render={()=><Admin
              clickTest={this.clickTest}
               />}
                />

              <Route exact path='/admin/newpostform' render={()=><NewPostForm onPostCreation={this.handleAddingNewPostToList} />}
            />

        </Switch>
      </div>
    );
  }
}



export default App;
