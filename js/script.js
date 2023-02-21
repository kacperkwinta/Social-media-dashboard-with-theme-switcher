"use strict";

const body = document.querySelector("body");
const header = document.querySelector("header");
const headingPrimary = document.querySelector(".heading-primary");
const headingSecondary = document.querySelector(".heading-secondary");
const btn = document.querySelector(".btn");
const btnText = document.querySelector(".btn-text");
const btnDot = document.querySelector(".dot");
const headerParagraph = document.querySelector(".header-p");
const bigBox = document.querySelectorAll(".social-box-big");
const socialScoreType = document.querySelectorAll(".social-score-type");
const smallBox = document.querySelectorAll(".social-box-small");
const contentType = document.querySelectorAll(".content-type");

btn.addEventListener("click", function () {
	body.classList.toggle("body--light");
	header.classList.toggle("header--light");
	headingPrimary.classList.toggle("heading-primary--light");
	headingSecondary.classList.toggle("heading-secondary--light");
	btnText.classList.toggle("btn-text--light");
	btn.classList.toggle("btn--light");
	btnDot.classList.toggle("dot--light");
	headerParagraph.classList.toggle("header-p--light");

	bigBox.forEach((bigBox) => {
		bigBox.classList.toggle("social-box-big--light");
	});

	socialScoreType.forEach((socialScoreType) => {
		socialScoreType.classList.toggle("social-score-type--light");
	});

	smallBox.forEach((smallBox) => {
		smallBox.classList.toggle("social-box-big--light");
	});

	contentType.forEach((contentType) => {
		contentType.classList.toggle("content-type--light");
	});
});
