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
import Post from './components/Post';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [],
      selectedArticle: {}
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

  setSelectedArticle = async (id) => {
    var newMasterPostList = this.state.masterPostList;
    var newSelectedArticle = this.state.selectedArticle;

    for(var i = 0; i < newMasterPostList.length; i++){

      if(typeof newMasterPostList[i] != "undefined" && newMasterPostList[i].id === id){
        newSelectedArticle = newMasterPostList[i];
        await this.setState({selectedArticle: newSelectedArticle});
        console.log(this.state.selectedArticle.title)

      }
    }
  }








  //experiemnting with edit keg route.
  //About and Resume can be static, no need for arrow function
  //experimenting with dynamic routing for each blog post
  //might need to pass props down though dynamic id route

  render(){

    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/codingblog' render={()=><CodingBlog
        postList={this.state.masterPostList}
        onSetSelectedArticle={this.setSelectedArticle}/>}
        />
        <Route path="/codingblog/:id" render={(props) => {
          const id = props.match.params.id;
          const data = this.state.masterPostList.find(article => article.id === id);
          if(data) {
            return <Post {...props} {...data} />
          }
        }}  />



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

// <Route path="/codingblog/article" component={Post}
//   article={this.state.selectedArticle}
//   title={this.state.selectedArticle.title} />


export default App;
