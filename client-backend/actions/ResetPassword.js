import {baseURL, userEmail} from "../src/config.js";


export class ResetPassword {
    makeRequest(){
        let params = {
            "email": 'usamoJS@email.com'
        };

        let config = {
            headers: {
                "accept": "application/ld+json",
                "Content-Type": "application/ld+json"
            }
        };
        return axios.post("https://127.0.0.1:8000/api/users/reset-password", params, config)
            .then(response=>{
                return response.data
            }).catch(error=> {
                console.log('DIDNT WORK');
                console.log(error)
        })
    }
}
