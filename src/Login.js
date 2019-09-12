import React, { Component } from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Window } from '@progress/kendo-react-dialogs';

class Login extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            username:'',
            password:''
        };

        this.updateUserName = this.updateUserName.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.login = this.login.bind(this);
    }

    updateUserName = function name(evt) {
        this.setState({
            username: evt.target.value
        });
    }

    updatePassword = function name(evt) {
        this.setState({
            password: evt.target.value
        });
    }
  
    login(){
       if (this.state.username==="demo" && this.state.password==="demo"){
            return this.props.history.push('/App');
       }
    }

    render() {
        return <div>
            <Window title="Log In" resizable={false} draggable={false} top={0} left={0} initialWidth={500} initialHeight={300}>
                <div class="login">
                    <div>
                        <Input label="username" onChange={this.updateUserName} />
                    </div>
                    <div>
                        <Input type="password" label="password" onChange={this.updatePassword} />
                    </div>
                    <br />
                    <div>
                        <Button onClick={this.login}>Log In!</Button>                    
                    </div>
                </div>
            </Window>
        </div>
    }
}

export default Login;