// App Fundamentals
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components

import Home from './components/Home';
import Resume from './components/Resume';
import CodingBlog from './components/CodingBlog';
import Admin from './components/Admin';
import NewPostForm from './components/NewPostForm';
import Header from './components/Header';
import Post from './components/Post';
import PostAdmin from './components/PostAdmin';
import EditPostForm from './components/EditPostForm';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [],
      selectedArticle: {},
      editContent: null,
      editDate: null,
      editTitle: null,
      editTopic: null
    };
  }

  clickTest = () => {
    console.log('the button was clicked');
  }

// setSelected Article is not an active function.

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

  //New Post being pushed to the API
  handleAddingNewPostToList(newPost){
    fetch('https://quiet-bayou-85740.herokuapp.com/articles', {
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
  //making API call in component did mount for list of articles. Displying on the 'CodingBlog' view

  componentDidMount(){
    fetch('https://quiet-bayou-85740.herokuapp.com/articles')
    .then(d => d.json())
    .then(d => {
      this.setState({
        masterPostList: d
      })
    })
  }






//This method saves the Article to be edited in local state, and deletes the original from the master list.

  setEditValues = async (obj) =>{
    var newEditContent = this.state.editContent;
    var newEditDate = this.state.editDate;
    var newEditTitle = this.state.editTitle;
    var newEditTopic = this.state.editTopic;
    newEditContent = obj.content;
    newEditDate = obj.date;
    newEditTitle = obj.title;
    newEditTopic = obj.topic;
    await this.setState({editContent: newEditContent});
    await this.setState({editDate: newEditDate});
    await this.setState({editTitle: newEditTitle});
    await this.setState({editTopic: newEditTopic});
    this.deleteAPost(obj.id);
    console.log(this.state)

  }

  //This method deletes a post

  deleteAPost = (id) => {

    fetch('https://quiet-bayou-85740.herokuapp.com/articles/' + id, {
      method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => console.log(res))
  }

  render(){

    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Home}/>
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

          <Route exact path='/admin/newpostform'
          render={()=><NewPostForm
          onPostCreation={this.handleAddingNewPostToList}
          />}
          />

          <Route exact path='/admin/edit'
          render={()=><EditPostForm
          onPostCreation={this.handleAddingNewPostToList}
          editContent={this.state.editContent}
          editDate={this.state.editDate}
          editTopic={this.state.editTopic}
          editTitle={this.state.editTitle} />}
          />

          <Route path="/admin/:postid" render={(props) => {
            const postid = props.match.params.postid;
            const data = this.state.masterPostList.find(article => article.postid === postid);
            if(data) {
              return <PostAdmin
              onEditPost={this.setEditValues}
              onDeleteAPost={this.deleteAPost}
              {...props}
              {...data} />
            }
          }}  />

          </Switch>
          </div>
        );
      }
    }



    export default App;
