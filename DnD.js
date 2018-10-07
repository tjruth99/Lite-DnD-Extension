
document.addEventListener('DOMContentLoaded', function() {

	var rollButton = document.getElementById('rollButton');

	rollButton.addEventListener('click', function(){
		var roll_Input = document.getElementById("roll_in").value;

		var roll_Input = parseInt(roll_Input);

		var number = Math.floor(Math.random()*roll_Input)+1;

		document.getElementById("roll_out").innerHTML = number;
	})

})