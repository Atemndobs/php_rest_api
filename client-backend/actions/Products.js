import {baseURL} from "../src/config.js";
import {addOptionElement} from "./offer/selector.js";

//import axios from 'axios';

const productsUrl = '/api/products';

export class Products {
    constructor() {
        axios.get(baseURL+productsUrl+'?pagination=false')
            .then(response => {

                response.data['hydra:member'].forEach(product => {
                 //   this.addOptionElement(product.name, product.id)
                    addOptionElement(product.name, product.id, "option", "product")
                })
            }).catch(function (error) {
                console.log(error)
        })
    }

/*    addOptionElement(text, value)
    {
        let option = document.createElement("option");
        option.text = text;
        option.value = value;
        let select = document.getElementById("product");

        select.appendChild(option);
    }*/
}
