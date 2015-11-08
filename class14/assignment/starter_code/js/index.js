/* 
This js will allow users to select a city in the dropdown menu, and changing the background as a result
*/

$(document).ready(function() {
	// Variables
	var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
	var i=0

	// Add cities as options in the dropdown menu
	for (i=0; i < cities.length; i++) {
		$('#city-type').append("<option>" + cities[i] + "</option");
	}

	// Events
	$('#city-type').change(changeBackground);

	function changeBackground () {
		var city = $(this).val();
		if ('#city-type' === "NYC") {
			$('body').attr('class','nyc')
		};
	}


});