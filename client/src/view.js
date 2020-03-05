import {baseURL} from "./config";


export function show(data) {
    var item = document.getElementById('products-list');
    var data_item = '';
    item.innerHTML = '';
    for (var i = 0; i<=data.length-1; i++){
        if (typeof data[i].image !== 'undefined'){
           // var imageUrl = baseURL+'/uploads/images/products/'+data[i].image;
            var imageUrl = data[i].image;
        }
        else var imageUrl = '';

        data_item += '<div class="card" style="width: 50rem;">' ;
        data_item += '<div class="card-body">' ;
        data_item += '<ul>' +
            '<li><b>'+data[i].name+'</b> - '+data[i].description+'</li>' +
            '<li><img width="100" height="100" src="'+imageUrl+' " </li>' +
            '<li>Offers</li>';

                for(var j = 0; j<=data[i].offers.length -1; j++){

                    data_item +='<ul>';
                    data_item +='<li><b> offer '+(j+1)+' </b></li>';
                    data_item +='<ul>';
                    data_item +='<li><a href="'+data[i].offers[j].url+'">url</a></li>';
                    data_item +='<li>'+data[i].offers[j].price+' '+data[i].offers[j].priceCurrency+'</li>';
                    data_item +='</ul>';
                    data_item +='</ul>';
                }
        data_item +='</ul>';
        data_item +='</div>';
        data_item +='</div>';
        data_item +='</p>';
    }
    item.innerHTML = data_item;
}



