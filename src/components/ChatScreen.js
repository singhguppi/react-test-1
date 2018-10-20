import React from 'react'
import ChatKit from '@pusher/chatkit'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'

class ChatScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [],
            currentRoom: [],
            currentUser: {}
        }
        this.sendMessage = this.sendMessage.bind(this)
    }

    componentDidMount() {
        const chatManager = new ChatKit.ChatManager({
            instanceLocator: 'v1:us1:8654e7bb-6cd8-40b2-9f57-fdcbab8deb9f',
            userId: this.props.currentUsername,
            tokenProvider: new ChatKit.TokenProvider({
                url: 'http://localhost:3001/authenticate'
            })
        })

            chatManager
            .connect()
            .then(currentUser => {
                this.setState({currentUser})
                return currentUser.subscribeToRoom({
                    roomId: 19082469,
                    messageLimit: 100,
                    hooks: {
                        onNewMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    }
                })
            }).then(currentRoom => {
                this.setState({currentRoom})
            })
            .catch(error => console.error(error))
    }

    sendMessage(text) {
        this.state.currentUser.sendMessage({
            roomId: this.state.currentRoom.id,
            text
        })
    }

    render() {
        return (
            <div>
                <h1>
                    chat
                </h1>
                <MessageList messages={this.state.messages}/>
                <SendMessageForm onSubmit={this.sendMessage}/>
            </div>
        )
    }
}

export default ChatScreen;


// WEBPACK FOOTER //
// src/components/ChatScreen.js