import React from 'react'
class MessageList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.messages.map((message,index)=>(
                    <li key={index}>
                    <div>
                        <spam>{message.senderId}</spam>
                        <p>{message.text}</p>
                    </div>
                    </li>
                ))}
            </ul>
        )
    }
}
export default MessageList;