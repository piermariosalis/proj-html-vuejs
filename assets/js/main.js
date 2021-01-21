// App Vue per aggiungere Links nell'Header.

// Nell'HTML. grazie alla direttiva v-html, posso stampare i link e modificarne lo stile.

var app1 = new Vue({
    el: '#vue_header',
    data: {
        Home: '<a href="#">HOME</a>',
        Landing: '<a href="#">LANDING</a>',
        Pages: '<a href="#">PAGES</a>',
        Docs: '<a href="#">DOCS</a>'

    },

})