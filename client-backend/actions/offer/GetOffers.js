import {baseURL} from "../../src/config.js";
import {addOptionElement} from "./selector.js";

//const axios = require('axios').default;
export class GetOffers {

    constructor() {
        let userId = localStorage.getItem('user_id');

        if (userId === null) return;

        axios.get(baseURL+ '/api/users/'+userId+'/offers')
            .then(response => {

                response.data['hydra:member'].forEach(offer =>{
                    addOptionElement(offer.url, offer['@id'], "option", "delete-offer")
                })
            } )
            .catch(error=> {
                console.log(error)
            })
    }

}
