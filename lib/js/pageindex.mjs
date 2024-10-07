import { Transliterate } from './transliterate.mjs';

const init = function() {

    const params = new URLSearchParams(window.location.search);

    Transliterate.init(document.body);
    if(params.get('script') === 'Taml') {
        const ul = document.querySelector('ul');
        for(const a of ul.querySelectorAll('li > a'))
            a.href = a.href + '?script=Taml';
    }

    document.body.addEventListener('copy',events.removeHyphens);
    
};

const events = {
    removeHyphens: function(ev) {
        ev.preventDefault();
        const hyphenRegex = new RegExp('\u00AD','g');
        var sel = window.getSelection().toString();
        sel = ev.target.closest('textarea') ? 
            sel :
            sel.replace(hyphenRegex,'');
        (ev.clipboardData || window.clipboardData).setData('Text',sel);
    },
};

init();

