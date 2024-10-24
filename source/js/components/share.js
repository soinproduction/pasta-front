import vars from '../_vars.js';

import {
    toggleCustomClass,
} from '../functions/customFunctions';

const {shareParent} = vars;

if(shareParent){
    const btn = shareParent.querySelector('.share__btn');
    const list = shareParent.querySelector('.socials');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCustomClass(btn, 'active');
        toggleCustomClass(list, 'active');
    })

}