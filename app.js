"use strict";

const hamburgerOpen = document.querySelector("header .hamburger");
const hamburgerClose = document.querySelector(".mobile-menu .hamburger");

const toggleHamburgerButton = () => {
	const mobileMenu = document.querySelector(".container > .mobile-menu");
	mobileMenu.classList.toggle("mobile-menu-active");
};

hamburgerOpen.addEventListener("click", toggleHamburgerButton);
hamburgerClose.addEventListener("click", toggleHamburgerButton);
