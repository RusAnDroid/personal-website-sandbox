'use strict';

let red_switch = document.documentElement.querySelector("#red-switch");
let green_switch = document.documentElement.querySelector("#green-switch");
let blue_switch = document.documentElement.querySelector("#blue-switch");
let black_switch = document.documentElement.querySelector("#black-switch");
let white_switch = document.documentElement.querySelector("#white-switch");
let random_switch = document.documentElement.querySelector("#random-switch");

let main_card = document.documentElement.querySelector("#change-color-card");

red_switch.addEventListener("click", function(e) {
    main_card.style.backgroundColor = "#f8173e";
    main_card.style.color = "#fff";
})

green_switch.addEventListener("click", function(e) {
    main_card.style.backgroundColor = "#20603d";
    main_card.style.color = "#fff";
})

blue_switch.addEventListener("click", function(e) {
    main_card.style.backgroundColor = "#005f9e";
    main_card.style.color = "#fff";
})

black_switch.addEventListener("click", function(e) {
    main_card.style.backgroundColor = "#000";
    main_card.style.color = "#fff";
})

white_switch.addEventListener("click", function(e) {
    main_card.style.backgroundColor = "#fff";
    main_card.style.color = "#333";
})

random_switch.addEventListener("click", function(e) {
    let r = Math.floor(Math.random() * Math.floor(256));
    let g = Math.floor(Math.random() * Math.floor(256));
    let b = Math.floor(Math.random() * Math.floor(256));
    if (r >= 90 && g >= 90 && b >= 90) {
        main_card.style.color = "#333";
    } else {
        main_card.style.color = "#fff";
    }
    main_card.style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", 1)";
})

window.requestAnimationFrame(set_right_size);

let switch_container = document.documentElement.querySelector("#color-switch");
let switch_blocks = document.documentElement.querySelectorAll(".color-switch-block");

function set_right_size() {
    if (window.innerWidth < 1000) {
        switch_container.style.height = "6.6vw";
        switch_container.style.width = "9.9vw";
        let cnt = 0;
        for (let block of switch_blocks) {
            block.style.width = "2vw";
            block.style.height = "2vw";
            if (cnt < 3) block.style.top = "0.7vw";
            else block.style.top = "3.7vw";
            block.style.left = (0.7 + (cnt % 3) * 3 + (cnt % 3) * 0.1) + "vw";
            ++cnt;
        }
    } else {
        switch_container.style.height = "3.3vw";
        switch_container.style.width = "4.95vw";
        for (let block of switch_blocks) {
            block.style.width = "1vw";
            block.style.height = "1vw";
        }
        let cnt = 0;
        for (let block of switch_blocks) {
            block.style.width = "1vw";
            block.style.height = "1vw";
            if (cnt < 3) block.style.top = "0.35vw";
            else block.style.top = "1.85vw";
            block.style.left = (0.35 + (cnt % 3) * 1.5 + cnt % 3 * 0.05) + "vw";
            ++cnt;
        }
    }
    if (window.innerWidth <= 700) {
        document.documentElement.querySelector("#change-color-card").style.fontSize = "12pt";
    } else {
        document.documentElement.querySelector("#change-color-card").style.fontSize = "15pt";
    }
    window.requestAnimationFrame(set_right_size);
}
