import React from 'react';
import { Input, Button } from 'semantic-ui-react'

class UsernameForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({
            username: e.target.value,
        })
    }
        onSubmit(e){
            e.preventDefault()
            this.props.onSubmit(this.state.username)
        }
    

render(){
    return(
        <div>
           
                <Input
                   placeholder="what is your username?"
                   onChange={this.onChange}
                   />
                   <Button onClick={this.onSubmit}> Create User</Button>


        </div>
    )
}
}
export default UsernameForm;