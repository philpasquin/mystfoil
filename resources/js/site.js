import 'alpinejs'
import 'focus-visible'
import Typed from 'typed.js'




// User for the autosearch in Algolia

// use for typing efect
var typed4 = new Typed('#search', {
        strings: ['Search for cars', 'Search for houses', 'Search for Audi s3 2017', 'Search for Peach Cargo 2020', 'Search fo average price of a Porsche 911 2010'],
        typeSpeed: 25,
        backSpeed: 0,
        backDelay: 1000,
        startDelay: 1000,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true,
        smartBackspace: false

});
    


