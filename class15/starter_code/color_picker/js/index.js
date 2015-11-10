$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);
$('#blueButton').click(switchBlue);
$('#yellowButton').click(switchYellow);

function switchGray() {
  $('body').attr('class', 'gray');
}

function switchWhite() {
  $('body').attr('class', 'white');
}

function switchBlue() {
  $('body').attr('class', 'blue');
}

function switchYellow() {
  $('body').attr('class', 'yellow');
}

//making the code more efficient

$('li').click(switchBackgroundColor);

function switchBackgroundColor () {
	var buttonClassName = $(this).attr('class');
	$('body').attr('class', buttonClassName);
}

//find all the list items, listening for the click event. Get the name of the class of the list item that's clicked.  We're going to assign it to the body and add a class.