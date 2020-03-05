import {baseURL} from "../../src/config.js";

import {Login} from "../Login.js";


//const axios = require('axios').default;

const offerUrl = '/api/offers?pagination=false';
export class AddOffer extends Login{

    constructor(url,price,priceCurrency,product_id)
    {
        super('AddOffer');
        this.url = url;
        this.price = price;
        this.priceCurrency = priceCurrency;
        this.productID = product_id;
    }

     AddOffer()
    {
        let params = {
            "url": this.url,
            "price": this.price,
            "priceCurrency": this.priceCurrency,
            "product": "api/products/"+this.productID
        };

        let config = {
            headers: {
                'accept': 'application/ld+json',
                'Content-Type': 'application/ld+json'
            }

        };

        axios.post(baseURL+offerUrl, params, config)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
               if (error.response.status === 401){
                   this.handle401Error();
               }
            })
    }

}
