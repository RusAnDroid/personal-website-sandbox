'use strict';

let red_switch = document.documentElement.querySelector('#red-switch');
let green_switch = document.documentElement.querySelector('#green-switch');
let blue_switch = document.documentElement.querySelector('#blue-switch');
let black_switch = document.documentElement.querySelector('#black-switch');
let white_switch = document.documentElement.querySelector('#white-switch');
let random_switch = document.documentElement.querySelector('#random-switch');

let main_card = document.documentElement.querySelector('#change-color-card');

red_switch.addEventListener('click', function(e) {
    main_card.style.backgroundColor = '#f8173e';
    main_card.style.color = '#fff';
})

green_switch.addEventListener('click', function(e) {
    main_card.style.backgroundColor = '#20603d';
    main_card.style.color = '#fff';
})

blue_switch.addEventListener('click', function(e) {
    main_card.style.backgroundColor = '#005f9e';
    main_card.style.color = '#fff';
})

black_switch.addEventListener('click', function(e) {
    main_card.style.backgroundColor = '#000';
    main_card.style.color = '#fff';
})

white_switch.addEventListener('click', function(e) {
    main_card.style.backgroundColor = '#fff';
    main_card.style.color = '#333';
})

random_switch.addEventListener('click', function(e) {
    let r = Math.floor(Math.random() * Math.floor(256));
    let g = Math.floor(Math.random() * Math.floor(256));
    let b = Math.floor(Math.random() * Math.floor(256));
    if (r >= 90 && g >= 90 && b >= 90) {
        main_card.style.color = '#333';
    } else {
        main_card.style.color = '#fff';
    }
    main_card.style.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ', 1)';
})