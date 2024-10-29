import vars from '../_vars.js';
import {elementHeight, removeCustomClass, addCustomClass} from '../functions/customFunctions.js';

const {header} = vars;

let lastScroll = 0;
const defaultOffset = 40;

function stickyHeaderFunction(breakpoint){
    let containerWidth = document.documentElement.clientWidth;
    if (containerWidth > `${breakpoint}`) {
        const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
        const containHide = () => header.classList.contains('sticky');

        window.addEventListener('scroll', () => {
            if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
                addCustomClass(header, "sticky")
            }
            else if(scrollPosition() < defaultOffset){
                removeCustomClass(header, "sticky")
            }

            lastScroll = scrollPosition();
        })
    }
}

document.addEventListener("DOMContentLoaded", function () {
    stickyHeaderFunction(320);

    elementHeight(header, 'header-height');
});
