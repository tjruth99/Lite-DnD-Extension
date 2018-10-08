
document.addEventListener('DOMContentLoaded', function() {

	var rollButton = document.getElementById('rollButton');
	
	var DiceTabButton = document.getElementById('DiceTab');
	var CharacterTabButton = document.getElementById('CharacterTab');

	DiceTabButton.addEventListener('click', function() { 
		document.getElementById('character').style.display = 'none';
		document.getElementById('dice').style.display = 'block';
	});
	
	CharacterTabButton.addEventListener('click', function() { 
		document.getElementById('dice').style.display = 'none';
		document.getElementById('character').style.display = 'block';
	});


	rollButton.addEventListener('click', function(){
		var roll_Input = document.getElementById("roll_in").value;

		var roll_Input = parseInt(roll_Input);

		var number = Math.floor(Math.random()*roll_Input)+1;

		document.getElementById("roll_out").innerHTML = number;
	})

})

function changeTab(tabId){
	var i, tabs;

	tabs = document.getElementsByClassName('tab');
	for(i = 0; i < tabs.length; i++) {
		tabs[i].style.display = "none";
	}

	document.getElementById(tabId).style.display = "block";
}