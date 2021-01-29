import React, { Component, useState, useContext, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';

import ReactDOM from 'react-dom';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import {postData} from '../../../assets/utils/fetchData'
import { DataContext } from '../../../store/GlobalState';
import { ACTION } from '../../../store/Actions';



export default function Facebook()
  {
    const [state, dispatch] = useContext(DataContext);

    const { userData } = state;
    const { auth } = state;
    const [submitStatus, setSubmitStatus] = useState({
        emailMessage: '',
        passwordMessage: '',
        emailNotExist: '',
      });

    const {email}= useState('');
    const {isLoggedin} = useState(false);
    const {userID}= useState('');
    const {name}=useState('');
    const {perfil}=useState('');
    const {setState} = useState();

    const responseFacebook = response =>{
         //console.log(response);
         setState(
             isLoggedin= true,
             userID= response.userID,
             name= response.name,
             email= response.email,
             picture= response.picture.data.url
         )

        
     }

    componentClicked = () => console.log("clicked");

   
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
    

