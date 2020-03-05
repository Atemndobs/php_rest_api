import {show} from "./view";
import {baseURL} from "./config";
import {pagination} from "./pagination";
import {router} from "./router";

const axios = require('axios');



export function getData(event) {
    axios.get(baseURL+router(event)).then(function (response) {
        console.log(response.data);
        var el = document.createElement('script');
        el.type = 'application/id+json';
        var jsonLd = {
            "@context": "http://schema.org/",
            "@id": "/api/product",
            "@type": "hydra:Collection"
        };
        jsonLd['hydra:member'] = response.data['hydra:member'];
        el.text = JSON.stringify(jsonLd);
        document.querySelector('head').appendChild(el);

        const searchButton = document.getElementById("search-button");
        const orderByName = document.getElementById("order-by-name");
        const filterWithImages = document.getElementById("filter-with-images-only");


        searchButton.addEventListener('click', getData);
        orderByName.addEventListener('click', getData);
        filterWithImages.addEventListener('click', getData);

        orderByName.style.display = 'block';
        filterWithImages.style.display = 'block';
        if (typeof orderByName.order === 'undefined')
        {orderByName.order = 'asc';}
        else if (orderByName.order === 'asc') {orderByName.order = 'desc';}
        else orderByName.order = 'asc';


        pagination(response.data);
        show(response.data['hydra:member']);
    }).catch(function (error) {
        console.log(error)
    })
    ;
}



