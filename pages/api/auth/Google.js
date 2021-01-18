import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

export default class Google
 extends Component {
    state = {
        isLoggedin: false,
        userID: '',
        name:'',
        email:'',
        picture:','
    }

   responseFacebook = response =>{
        //console.log(response);
        this.setState({
            isLoggedin: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

     componentClicked = () => console.log("clicked");

    render() {
        let goContent;
        if(this.state.isLoggedin){
            goContent = null;
        } else{
            goContent = (
                <GoogleLogin
                clientId="563786372572-bbe6ifo4eslnm6710fh6b4ujog0qh0nb.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'} /> )
          
            
        }
        return (
            <div>
                {goContent}
            </div>
        )
    }
}
