import React,{Component} from 'react';
import UsernameForm from './components/UsernameForm'
import ChatScreen from './components/ChatScreen'

class App extends Component {
  constructor(){
    super()
    this.state={
      currentScreen:'WhatIsYourUsernameScreen',
      currentUsername:''
    }
    this.onUsernameSubmitted=this.onUsernameSubmitted.bind(this)
  }
  onUsernameSubmitted(username){
    fetch('http://localhost:3001/users',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({username}),
    }).then(response => {
      this.setState({
        currentUsername:username,

      })
    })
    .catch(error=>{
      console.error(error)
    })
  }
  render() {
    if(!this.state.currentUsername){
    return <UsernameForm onSubmit={this.onUsernameSubmitted}/>
    } else
       return <ChatScreen currentUsername={this.state.currentUsername}/>

  }
}

export default App