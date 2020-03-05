import {baseURL, email, password} from "../src/config.js";
//import axios from 'axios'


export class Register {
    static register(){
        let params = new URLSearchParams();
        params.append('email', email);
        params.append('password', password);

        let config = {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
        };
        axios.post(baseURL+'/register', params, config)
            .then(response =>{
                console.log(response);
            }).catch(error => {
                console.log(error);
        })
    }
}
