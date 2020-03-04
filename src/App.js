// App Fundamentals
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components

import Home from './components/Home';
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

//pusing new post to the api
handleAddingNewPostToList(newPost){
  fetch('http://localhost:3000/articles', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: newPost.content,
    date: newPost.date,
    title: newPost.title,
    topic: newPost.topic,
    postid: newPost.postid
  })
})
}
//making API call in component did mount for list of articles

componentDidMount(){
  fetch('http://localhost:3000/articles')
  .then(d => d.json())
  .then(d => {
    this.setState({
      masterPostList: d
    })
  })
}

//method to delete a post

deleteAPost(postid){
  fetch('http://localhost:3000/articles/' + postid, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))
}



  //About and Resume can be static, no need for arrow function
  //could have a 'get data' function. make one api call and get all of the articles. rest of code likely doesn't need to change
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
      <Route path="/codingblog/:postid" render={(props) => {
          const postid = props.match.params.postid;
          const data = this.state.masterPostList.find(article => article.postid === postid);
          if(data) {
            return <Post {...props} {...data} />
          }
        }}  />



        <Route exact path='/admin' render={()=><Admin
          postList={this.state.masterPostList}
          clickTest={this.clickTest}
          />}
          />

          <Route path="/admin/:postid" render={(props) => {
              const postid = props.match.params.postid;
              const data = this.state.masterPostList.find(article => article.postid === postid);
              if(data) {
                return <Post {...props} {...data} />
              }
            }}  />


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
