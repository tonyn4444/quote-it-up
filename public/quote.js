$(document).ready(function() {

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const API_KEY = '3WCCv5qHyjmsh6brG8k3D9d9VqK7p1gEKwgjsnacjNbHEsKfsa'
var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/'

var options = {
	url: url,
	headers: {
		'X-Mashape-Key': API_KEY
	}
}

	$('#new-quote-btn').on('click', function(event) {
		// Change colors of html attributes
		var ranNum = Math.floor((Math.random() * 12))
		event.preventDefault();

		// $('#body').animate({
		// 	backgroundColor: colors[ranNum],
		// 	color: colors[ranNum]
		// }, 700)

		// Make request for quote to API
		$.ajax({
			headers: {
				'X-Mashape-Key': API_KEY
			},
			url: url,
			success: function(response) {
				// console.log('response', response);
				// var parsedData = JSON.parse(response);
				const parsedData = response[0];
				console.log('parsedData', parsedData);

				// $('#body').animate({
				// 	backgroundColor: colors[ranNum]
				// }, 700);

				$('.change').animate({
					opacity: 0
				}, 700, function() {
					$("#author").text("- " + parsedData.author);
					$("#quote").text('"' + parsedData.quote + '"');
					$(".change").css("color", colors[ranNum]);
					$("#body").css('background-color', colors[ranNum]);
					$('html').css('background-color', colors[ranNum]);
					$("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + parsedData.quote + "%20-" + parsedData.author);
					$(this).animate({
						opacity: 1
					}, 700)
					
					
				});
			}
		});
	});
});