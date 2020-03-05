import {Register} from "./actions/Register.js";

import {AddOffer} from "./actions/offer/AddOffer.js";
import {GetOffers} from "./actions/offer/GetOffers.js";
import {DeleteOffer} from "./actions/offer/DeleteOffer.js";
import {Login} from "./actions/Login.js";
import {Products} from "./actions/Products.js";
import {ResetPassword} from "./actions/ResetPassword.js";

const nameField = document.getElementById('name');
const passField = document.getElementById('password');
const signout = document.getElementById('logout');

signout.style.display = 'none';


const login = new Login();
const signin = document.getElementById('login');
signin.addEventListener('click', () => {
   login.getJWTToken();


   passField.style.display = 'none';
   nameField.style.display = 'none';
   signin.style.display = 'none';
   signout.style.display = 'block';


});


signout.addEventListener('click', () => {
   login.logout();
   passField.style.display = 'block';
   nameField.style.display = 'block';
   signin.style.display = 'block';
   signout.style.display = 'none';

});
//login.logout();

//Register.register();

window.onload = () => {
   let  needsLogin = document.getElementById("needs-login");

   needsLogin.addEventListener("click", ()=> {
      let login = new Login();
      login.logout().then(() =>{
         login.login();
         needsLogin.style.display = "none";
      });
   })
};

new Products();
let addOffer = document.getElementById("add-offer");


addOffer.addEventListener("click", () =>{
   let url = document.getElementById("url");
   let price = document.getElementById("price");
   let currency = document.getElementById("currency");
   let  product =  document.getElementById("product");
   let product_id = product.options[product.selectedIndex].value;

   new AddOffer(url.value,parseFloat(price.value),currency.value,product_id);

});

new GetOffers();

let deleteOffer = document.getElementById("delete-offer-button");
deleteOffer.addEventListener("click", () => {
   let offer = document.getElementById("delete-offer");
   let offer_id = offer.options[offer.selectedIndex].value;

   new DeleteOffer(offer_id);

});

// Reset Password

let resetPasswordRequest = document.getElementById("reset-password-request")
resetPasswordRequest.addEventListener("click", () => {
   let resetP = new ResetPassword
   resetP.makeRequest().then((response) => {
      if(typeof response !=='undefined')
      {
         console.log(response)
      }
   })
});
