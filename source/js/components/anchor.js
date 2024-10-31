import vars from "../_vars.js";
const { header } = vars;

import SmoothScroll from "smooth-scroll";

document.addEventListener("DOMContentLoaded", function () {
  const headerHeight = header.offsetHeight;
  const arrow = document.querySelector('.hero-section__down');
  if(arrow){
    document.querySelectorAll(".info-section").forEach(section => {
      section.style.scrollMarginTop = `${headerHeight}px`;
    });

    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1200,
      updateURL: false
    });

    arrow.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#info').scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});
