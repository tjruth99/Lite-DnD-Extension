

document.addEventListener('DOMContentLoaded', function() {
	var rollButton = document.getElementById('rollButton');

	rollButton.addEventListener('click', function(){
		var roll_Input = document.getElementById("roll_in").value;

		try{
			var roll_Input = parseInt(roll_Input);
		} catch (err) {
			roll_Input = 20;
		}
		var number = Math.floor(Math.random()*roll_Input)+1;

		document.getElementById("roll_out").innerHTML = number;
	})

})