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


// App Vue per aggiungere links nel footer.

// Nell'HTML grazie alla direttiva v-html, posso stampare i links e modifcarne lo stile.
var app2 = new Vue({
	el: '#vue_footer',
	data: {
		About: '<a href="#">About us</a>',
		Services: '<a href="#">Services</a>',
		Team: '<a href="#">Team</a>',
		Pricing: '<a href="#">Pricing</a>',
		Project: '<a href="#">Project</a>',
		Careers: '<a href="#">Careers</a>',
		Blog: '<a href="#">Blog</a>',
		Login: '<a href="#">Login</a>',
		Terms: '<a href="#">Terms of Services</a>',
		Privacy: '<a href="#">Privacy Policy</a>',
		Documentation: '<a href="#">Documentation</a>',
		Changelog: '<a href="#">Changelog</a>',
		Components: '<a href="#">Components</a>',
	}
})