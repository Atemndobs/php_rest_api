import {baseURL, userPass, userEmail} from "../src/config.js";






//import axios from 'axios'


export class Login {

    constructor(action = null) {
        if (action !== null){
            // send Token header
            this.sendTokenHeader().then(()=> {
                // call action
                eval("this."+action+"()")

            })

        }
    }

    sendTokenHeader(){
        return new Promise((resolve)=> {
            axios.defaults.headers.common = {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
            };

            resolve()
        })
    }
    getJWTToken() // login
    {

        return new Promise((resolve) => {
            let params = {
                "email": userEmail.value,
                "password": userPass.value
            };

            let config = {
                headers: {
                    'accept': 'application/json',
                }
            };
            axios.post(baseURL+'/authentication_token', params, config)
                .then(( response)=>{
                    localStorage.setItem("jwt_token", response.data.token);
                    localStorage.setItem("user_id", response.data.id);
                    console.log(response.data.token)
                }).catch(error => {
                if (error.response.status === 401){
                    this.handle401Error();
                }
                resolve()
            })
        })





    }

    logout()
    {
        return new Promise((resolve) => {
            localStorage.removeItem('jwt_token');
            localStorage.removeItem('user_id');
            resolve();
        })
    }

    login(){
        this.getJWTToken();
    }

    handle401Error(){
        let p = document.getElementById("needs-login");
        p.style.display = "block";
        let a = document.createElement('a');
        a.style.color = "#FF0000";
        let linkText = document.createTextNode("Invalid Authorization, click to login");
        a.appendChild(linkText);
        a.href = "#";
        p.appendChild(a);
        document.body.appendChild(p);
    }



}

