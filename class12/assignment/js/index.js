/*
// When a user hits the submit button, we get the city that the user entered and test to see what the city is.
If the city is New York, update the background to the New York image.
If the city is San Francisco, update the background to the SF image...
*/

$(document).ready(function(){
	$('#submit-btn').click(changeBackground);

	function changeBackground(event) {
		event.preventDefault();
		//setting the city variable as user's input
		city = $('#city-type').val();

		//changing the background to various cities depending on user input
		if( city === "New York" || city === "NYC" || city ==="New York City") {
			$('body').attr('class','nyc')
		} else if( city === "San Francisco" || city === "SF" || city === "Bay Area") {
			$('body').attr('class','sf')
		} else if( city === "Los Angeles" || city === "LA" || city ==="LAX") {
			$('body').attr('class','la')
		} else if( city === "Austin" || city ==="ATX") {
			$('body').attr('class','austin')
		} else if( city === "Sydney" || city === "SYD") {
			$('body').attr('class','sydney')
		}

		//resetting the text input after hitting submit
		$('#city-type').val('');
	}
});