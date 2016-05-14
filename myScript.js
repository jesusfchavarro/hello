var canvas = document.getElementById("canvas");

function playAhorcado(lib, scene, palabra, numeroIntentos){
	var lin = {};
	var intentoFallido = 0
		, intentosNoFallidos = 0;
	scene.hang.visible = false;
	scene.text1.visible = true;
	for (var i = 0; i < palabra.length; i++) {
		var charAt = palabra.charAt(i);
		if (charAt != ' ') {
			lin['line_' + i] = new lib.line("synched", 0);
			lin['line_' + i].name = "letter" + i;
			lin['line_' + i].setTransform(40 + (30 + 50 * i), 560, 1, 1, 0, 0, 0, 19, 2.5);
			lin['line_' + i].letter.text = ' ';
			scene.addChild(lin['line_' + i]);
		}
	}

	function isCorrect(character) {
		var o = false;
		for (var i = 0; i < palabra.length; i++) {
			if (palabra.charAt(i).toUpperCase() == character) {
				if(!(scene.getChildByName("letter" + i).letter.text == palabra.charAt(i))){
					intentosNoFallidos += 1 ;
				}
				scene.getChildByName("letter" + i).letter.text = palabra.charAt(i);
				o = true
			}
		}
		return o;
	}

	function finishGame(){
		for(var i=0; i < palabra.length; i++) {
				scene.removeChild(lin['line_' + i]);
			}
		for( ; intentoFallido >= 0; intentoFallido--){
			scene.removeChild(lin[['wrong_' + intentoFallido]]);
		}
		document.onkeydown = null;
	} 

	document.onkeydown = function (event) {
		scene.text1.visible = false;
		var character1 = String.fromCharCode(event.keyCode);
		var a ;
		if(intentoFallido > 2){
			a = 300;
		}else if(intentoFallido > 4){
			a = 380; 
		}else{
			a = 220;
		}
		if (!isCorrect(character1)) {
			lin['wrong_' + intentoFallido] = new lib.line("synched", 0);
			lin['wrong_' + intentoFallido].setTransform(80 + (80 * (intentoFallido % 3)), a, 1, 1, 0, 0, 0, 19, 2.5);
			lin['wrong_' + intentoFallido].letter.text = character1;
			scene.addChild(lin['wrong_' + intentoFallido]);
			intentoFallido++;
			scene.hang.gotoAndStop(intentoFallido+(palabra.length - numeroIntentos));
			scene.hang.visible = true;
		}
		if (intentoFallido == numeroIntentos) {
			finishGame();
			scene.gotoAndStop(scene.currentFrame+1);
		}else if(intentosNoFallidos == palabra.length){
			finishGame();
			scene.gotoAndStop(scene.currentFrame+2);
		}
	}
}