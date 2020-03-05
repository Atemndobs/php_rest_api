import {baseURL} from "../../src/config.js";
import {Login} from "../Login.js";




export class DeleteOffer extends Login{
    constructor(delete_url)
    {
        super('DeleteOffer');
        this.delete_url = delete_url;
    }


    DeleteOffer(){
        axios.delete(baseURL+this.delete_url)
            .then(response => {
                console.log(response);
                alert('deleted offer Id : '+response.status)
            })
            .catch(error =>{
                if (error.response.status === 401){
                    this.handle401Error();
                }
            })
    }
}
