
let homeButton = document.querySelector("#home");
let aboutButton = document.querySelector("#about");
let playButton = document.querySelector("#play");

homeButton.addEventListener("click", () => {
	setTimeout(() => {
		let main = document.querySelector("#main");
		main.style.display = "block";
	},200)
	let about = document.querySelector(".aboutSection");
	about.style.display = "none";
	let play = document.querySelector(".playSection");
	play.style.display = "none";

});

aboutButton.addEventListener("click", () => {
	setTimeout(() => {
		let about = document.querySelector(".aboutSection");
		about.style.display = "flex";
	},200)
	let main = document.querySelector("#main");
	main.style.display = "none";
	let play = document.querySelector(".playSection");
	play.style.display = "none";

});


playButton.addEventListener("click", () => {
	setTimeout(() => {
		let play = document.querySelector(".playSection");
		play.style.display = "block";
	},200)
	
	let about = document.querySelector(".aboutSection");
	about.style.display = "none";
	let main = document.querySelector("#main");
	main.style.display = "none";

});


// GAME SCRIPT
// GAME SCRIPT
// GAME SCRIPT
// GAME SCRIPT


var play = document.getElementById("startButton");
var garen = document.getElementById("garen");
var frame = document.getElementById("frame");
var answer = document.getElementById("button");
var answer2 = document.getElementById("button2");
var garenimg = document.querySelector(".garenimg")
var sett = document.querySelector(".sett")
var next = document.getElementById("next");
var input = document.getElementById("input");
var hint = document.getElementById("hint");
var hint1 = document.getElementById("hint1");
var hint2 = document.getElementById("hint2");
var hint3 = document.getElementById("hint3");
var hint4 = document.getElementById("hint4");
var hint5 = document.getElementById("hint5");
var hint6 = document.getElementById("hint6");
var hint7 = document.getElementById("hint7");
var hint8 = document.getElementById("hint8");
var hint9 = document.getElementById("hint9");
var hint10 = document.getElementById("hint10");
let form = document.getElementById("form");
var sett = document.getElementById("frame2");
var answer3 = document.getElementById("button3");
var diana = document.getElementById("frame3");
var next2 = document.getElementById("next2");
var thanks = document.getElementById("thanks");
var next4 = document.getElementById("next4");
var next5 = document.getElementById("next5");
var next6 = document.getElementById("next6");
var next7 = document.getElementById("next7");
var next8 = document.getElementById("next8");
var next9 = document.getElementById("next9");
var next10 = document.getElementById("next10");
var next3 = document.getElementById("next3");
var answer4 = document.getElementById("button4");
var senna = document.getElementById("frame4");
var kalista = document.getElementById("frame6");
var jhin = document.getElementById("frame7");
var jinx = document.getElementById("frame8");
var ekko = document.getElementById("frame9");
var volibear = document.getElementById("frame10");
var answer5 = document.getElementById("button5");
var answer6 = document.getElementById("button6");
var answer7 = document.getElementById("button7");
var answer8 = document.getElementById("button8");
var answer9 = document.getElementById("button9");
var answer10 = document.getElementById("button10");
var atrox = document.getElementById("frame5");


	form.addEventListener("submit", (e) =>{
		e.preventDefault();
	})


	play.addEventListener("click", function(){
		play.style.display = "none";
		document.querySelector(".allButtons").style.display = "flex"
		frame.style.display = "block";
	});

	hint.addEventListener("click", function(){
		alert("Level 1 - Champion Price: 450BP, First Letter: G")
	});

	answer.addEventListener("click", function(){
		var inputGaren = document.getElementById('input').value;
		if(inputGaren === "Garen" || inputGaren === "garen" || inputGaren === "garen "){
			answer.style.display = "none";
			answer2.style.display = "inline-block";
			frame2.style.display = "block";
			frame.style.display = "none";
			hint.style.display = "none";
			document.getElementById("input").value = "";
			document.getElementById("input").focus();
		}else{
			alert("Wrong");
			hint.style.display = "inline-block";
			document.getElementById("input").focus();
		} 
	});

hint1.addEventListener("click", function(){
	alert("Level 2 - Champion Price: 6300BP, First Letter: S")
});
	answer2.addEventListener("click", function(){
		var inputSett = document.getElementById("input").value;
		if(inputSett === "sett" || inputSett === "Sett" || inputSett === "sett "){
			answer2.style.display = "none";
			sett.style.display = "none";
			diana.style.display = "block";
			answer3.style.display = "inline-block";
			hint1.style.display = "none";
			document.getElementById("input").value = "";
			document.getElementById("input").focus();
		}else{
		alert("Wrong");
		hint1.style.display = "block";
		document.getElementById("input").focus();
	}
	});


hint2.addEventListener("click", function(){
	alert("Level 3 - Champion Price: 4800BP, First Letter: D")
});
answer3.addEventListener("click", function(){
	var inputDiana = document.getElementById("input").value;
	if(inputDiana === "Diana" || inputDiana === "diana" || inputDiana === "diana "){
		answer3.style.display = "none";
		diana.style.display = "none";
		answer4.style.display = "inline-block";
		senna.style.display = "block";
		hint2.style.display = "none";
		document.getElementById("input").value = "";
		document.getElementById("input").focus();
	}else{
		alert("Wrong");
		hint2.style.display = "block";
		document.getElementById("input").focus();
	}
});




hint3.addEventListener("click", function(){
	alert("Level 4 - Champion Price: 6300BP, First Letter: S")
});
answer4.addEventListener("click", function(){
	var inputSenna = document.getElementById("input").value;
	if(inputSenna === "Senna" || inputSenna === "senna" || inputSenna === "senna "){
		answer4.style.display = "none";
		atrox.style.display = "block";
		senna.style.display = "none";
		answer5.style.display = "inline-block";
		hint3.style.display = "none";
		document.getElementById("input").value = "";
		document.getElementById("input").focus();
	}else{
		alert("Wrong answer");
		hint3.style.display = "block";
		document.getElementById("input").focus();
	}
});
;

hint4.addEventListener("click", function(){
	alert("Level 5 - Champion Price: 4800BP, First Letter: A")
});
answer5.addEventListener("click", function(){
	var inputAtrox = document.getElementById("input").value;
	if(inputAtrox === "Atrox" || inputAtrox === "atrox" || inputAtrox === "atrox " || inputAtrox === "aatrox" || inputAtrox === "Aatrox " || inputAtrox === "Aatrox"){
		answer5.style.display = "none";
		answer6.style.display = "inline-block";
		atrox.style.display = "none";
		kalista.style.display = "block";
		hint4.style.display = "none";
		document.getElementById("input").value = "";
		document.getElementById("input").focus();
	}else{
		alert("Wrong");
		hint4.style.display = "block";
		document.getElementById("input").focus();
	}
});


hint5.addEventListener("click", function(){
	alert("Level 6 - Champion Price: 6300BP, First Letter: K")
});
answer6.addEventListener("click", function(){
	var inputKalista = document.getElementById("input").value;
	if(inputKalista === "Kalista" || inputKalista === "kalista" || inputKalista === "kalista "){
		answer6.style.display = "none";
		kalista.style.display = "none";
		answer7.style.display = "inline-block";
		jhin.style.display = "block";
		hint5.style.display = "none";
		document.getElementById("input").value = "";
		document.getElementById("input").focus();
	}else{
		alert("Wrong");
		hint5.style.display = "block";
		document.getElementById("input").focus();
	}
});	

hint6.addEventListener("click", function(){
	alert("Level 7 - Champion Price: 6300BP, First Letter: J")
});
answer7.addEventListener("click", function(){
	var inputJhin = document.getElementById("input").value;
	if (inputJhin === "Jhin" || inputJhin === "jhin" || inputJhin === "jhin "){
		answer7.style.display = "none";
		answer8.style.display = "inline-block";
		jhin.style.display = "none";
		jinx.style.display = "block";
		hint6.style.display = "none";
		document.getElementById("input").value = "";
		document.getElementById("input").focus();
		
	}else{
		alert("Wrong");
		hint6.style.display = "block";
		document.getElementById("input").focus();
	}

});
hint7.addEventListener("click", function(){
	alert("Level 8 - Champion Price: 4800BP, First Letter: J")
});
answer8.addEventListener("click", function(){
	var inputJinx = document.getElementById("input").value;
	if (inputJinx === "Jinx" || inputJinx === "jinx" || inputJinx === "jinx ") {
		answer8.style.display = "none";
		answer9.style.display = "inline-block";
		jinx.style.display = "none";
		ekko.style.display = "block";
		hint7.style.display = "none";
		document.getElementById("input").value = "";
		document.getElementById("input").focus();
	}else{	
		alert("Wrong");
		hint7.style.display = "block";
		document.getElementById("input").focus();
	}
});

hint8.addEventListener("click", function(){
	alert("Level 9 - Champion Price: 6300BP, First Letter: E")
});

answer9.addEventListener("click", function(){
	var inputEkko = document.getElementById("input").value;
	if(inputEkko === "Ekko" || inputEkko === "ekko" || inputEkko === "ekko " || inputEkko === "Ekko "){
		answer9.style.display = "none";
		answer10.style.display = "inline-block";
		ekko.style.display = "none";
		volibear.style.display = "block";
		hint8.style.display = "none";
		document.getElementById("input").value = "";
		document.getElementById("input").focus();
	}else{
		alert("Wrong");
		hint8.style.display = "block";
		document.getElementById("input").focus();
	}
})

hint9.addEventListener("click", function(){
	alert("Level 10 - Champion Price: 4800BP, First Letter: V")
});
answer10.addEventListener("click", function(){
	var inputVolibear = document.getElementById("input").value;
	if(inputVolibear === "Volibear" || inputVolibear === "volibear" || inputVolibear === "Volibear " || inputVolibear === "volibear "){
		answer10.style.display = "none";
		input.style.display = "none";
		hint9.style.display = "none";
		volibear.style.display = "none";
		thanks.style.display = "block";
		document.getElementById("input").value = "";
	}else{
		alert("Wrong");
		hint9.style.display = "block";
		document.getElementById("input").focus();
	}
})

