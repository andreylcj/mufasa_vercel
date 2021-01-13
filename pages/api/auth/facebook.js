import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'
import ReactDOM from 'react-dom';

export default class facebook
 extends Component {
     state = {
         isLoggedin: false,
         userID: '',
         name:'',
         email:'',
     }

     responseFacebook = response =>{
         console.log(response);
     }

     componentClicked = () => console.log("clicked");

    render() {
        let fbContent;
        if(this.state.isLoggedin){
            fbContent = null;
        } else{
            fbContent = (
                <FacebookLogin
                appId="2790121004649262"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} /> )
          
            
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
