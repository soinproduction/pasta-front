import {disableScroll} from '../functions/disable-scroll.js';
import {enableScroll} from '../functions/enable-scroll.js';
import vars from '../_vars.js';

import {
    toggleClassInArray,
    toggleCustomClass,
    removeCustomClass,
    removeClassInArray,
    addCustomClass
} from '../functions/customFunctions';

const {
    overlay,
    burger,
    mobileMenu,
    header,
    activeClass,
    activeClassMode
} = vars;

const mobileMenuHandler = function (overlay, mobileMenu, burger) {
    burger.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            toggleCustomClass(mobileMenu, activeClass);
            toggleClassInArray(burger, activeClass);
            toggleCustomClass(overlay, activeClass);

            if (mobileMenu.classList.contains(activeClass)) {
                disableScroll();
                addCustomClass(header, 'open-menu')
            } else {
                enableScroll();
                removeCustomClass(header, 'open-menu')
            }
        })
    });

}

export const hideMenuHandler = function (overlay, mobileMenu, burger) {
    enableScroll()
    removeCustomClass(mobileMenu, activeClass);
    removeClassInArray(burger, activeClass);
    removeCustomClass(overlay, activeClassMode);

    if (mobileMenu.classList.contains(activeClass)) {
        disableScroll();
        addCustomClass(header, 'open-menu')
    } else {
        enableScroll();
        removeCustomClass(header, 'open-menu')
    }
}

if (overlay) {
    mobileMenuHandler(overlay, mobileMenu, burger);
    overlay.addEventListener('click', function (e) {
        if (e.target.classList.contains('overlay')) {
            hideMenuHandler(overlay, mobileMenu, burger);
        }
    });

}


mobileMenu.querySelectorAll('a').forEach(function (item) {
    item.addEventListener('click', function () {
        hideMenuHandler(overlay, mobileMenu, burger);
    })
})

document.querySelectorAll('[data-modal]').forEach(function (item) {
    item.addEventListener('click', function () {
        hideMenuHandler(overlay, mobileMenu, burger);
    })
})





