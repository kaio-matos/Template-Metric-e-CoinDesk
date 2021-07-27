import { isElementBetweenBottomAndTop } from "./isOnScreen.js";

const features = document.getElementById("features");
const pricing = document.getElementById("pricing");
const customers = document.getElementById("customers");
const button = document.querySelector("header button");
const menuLinks = document.querySelectorAll("header li a");
const menu = document.querySelector("header ul");

button.addEventListener("click", () => {
  menu.classList.toggle("menuActive");
});

window.addEventListener("scroll", () => {
  if (isElementBetweenBottomAndTop(features)) {
    menuLinks[0].classList.add("header__active__menu");
  } else {
    menuLinks[0].classList.remove("header__active__menu");
  }

  if (isElementBetweenBottomAndTop(pricing)) {
    menuLinks[1].classList.add("header__active__menu");
  } else {
    menuLinks[1].classList.remove("header__active__menu");
  }

  if (isElementBetweenBottomAndTop(customers)) {
    menuLinks[2].classList.add("header__active__menu");
  } else {
    menuLinks[2].classList.remove("header__active__menu");
  }
});
