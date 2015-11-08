/* 
This js will allow users to select a city in the dropdown menu, and changing the background as a result
*/

$(document).ready(function() {
	// Variables
	var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
	var i=0

	// Add cities as options in the dropdown menu
	for (i=0; i < cities.length; i++) {
		$('#city-type').append("<option>" + cities[i] + "</option")
	}

	// Changing the background depending on dropdown selection
	$('#city-type').change(function() {

		// Capturing the dropdown selection value
		var city = $('#city-type').val();

		// Changing background
		if(city === "NYC") {
			$('body').attr('class','nyc')
		} else if(city === "SF") {
			$('body').attr('class', 'sf')
		} else if(city === "LA") {
			$('body').attr('class', 'la')
		} else if(city === "ATX") {
			$('body').attr('class', 'austin')
		} else if(city === "SYD") {
			$('body').attr('class', 'sydney')
		}
	})
	


});