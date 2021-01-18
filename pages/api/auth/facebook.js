import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'
import ReactDOM from 'react-dom';
import { DataContext } from '../../store/GlobalState'

export default class Facebook
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
        let fbContent;
        if(this.state.isLoggedin){
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    backgroud: 'grey',
                    padding: '20px'
                }}>
                        <img src={this.state.picture} alt={this.state.name} /> 
                        <h2> Bem vindo {this.state.name}</h2>
                </div>
            )
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
