$(document).ready(function() {

	//hide candidate section

	//Event
	$('#submit').click(calculateSubmissions);

	function calculateSubmissions(event) {

		//prevent submission button default from refreshing the page
		event.preventDefault();

		//clear previous results


		//get the selected values
		var q1Answer = $('input[name=q1]:checked').val(); 
		var q2Answer = $('input[name=q2]:checked').val();
		var q3Answer = $('input[name=q3]:checked').val();
		var q4Answer = $('input[name=q4]:checked').val();
		var q5Answer = $('input[name=q5]:checked').val();
		console.log(q1Answer);
		console.log(q2Answer);
		console.log(q3Answer);
		console.log(q4Answer);
		console.log(q5Answer);

		//setup array to contain all the user's answers
		var allAnswers = [q1Answer, q2Answer, q3Answer, q4Answer, q5Answer]

		//create variables to keep track of each candidate's count
		var clintonCount = 0
		var sandersCount = 0
		var trumpCount = 0
		var carsonCount = 0

		//running total of each candidate's submission
		allAnswers.forEach(function(answer) {
			if (answer === 'clinton') {
			clintonCount++;
			} else if (answer === 'sanders') {
			sandersCount++;
			} else if (answer === 'trump') {
			trumpCount++;
			} else if (answer === 'carson') {
			carsonCount++;
			}
		});
		
		//showing each candidate's total count
		console.log(clintonCount);
		console.log(sandersCount);
		console.log(trumpCount);
		console.log(carsonCount);

		var allCounts = [clintonCount, sandersCount, trumpCount, carsonCount]

		// Get the max value from the array    
		var maxValue = Math.max.apply(Math, allCounts);

		// Get the index of the max value, through the built in function inArray
		var index_maxValue = $.inArray(maxValue,allCounts);
		console.log(index_maxValue);

		//display result to user and scroll to
		if (index_maxValue === 0) {
			$('#hillary').addClass('revealBFF');

			$(window).scrollTo('#hillary',1000);
		} else if (index_maxValue === 1) {
			$('#bernie').addClass('revealBFF');

			$(window).scrollTo('#bernie',1000);
		} else if (index_maxValue === 2) {
			$('#donald').addClass('revealBFF');

			$(window).scrollTo('#donald',1000);
		} else if (index_maxValue === 3) {
			$('#ben').addClass('revealBFF');

			$(window).scrollTo('#ben',1000);
		} 	}

});