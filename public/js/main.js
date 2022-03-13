"use strict";


const vm = new Vue({
    el: '#document',
    components: {cart,products},
    data:{
    cartItems: [],
    isCartEmpty: true
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },
        deleteJson(url, data){
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                    
                })
        }
    }
})



function visibilityOfElement (el){
    el.classList.toggle('invisible');
}



const burgerMenuEl = document.querySelector('.burger-menu');
const menuContentEl = document.querySelector('ul.navLinks_burger');
burgerMenuEl.addEventListener('click', () => visibilityOfElement(menuContentEl));




