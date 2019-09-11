import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class Login extends Component {

    constructor(props) {
        super(props);
      }

    onSuccess = (response) => {        
        if (response.googleId)         
            return this.props.history.push('/App');
    }

    onFailure = (response) => {
        console.log(response);
    }

    render() {
        return <div className="centered">
        <label>Sign In with google! </label>
        <GoogleLogin clientId="855867882223-trt3gh3h2iedcecu81tfm4btaj3s2le0.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'} />
        </div>
    }
}

export default Login;