var canvas = document.getElementById("canvas");

function playAhorcado(lib, scene, palabra, numeroIntentos){
	var lin = {};
	var intentoFallido = 0
	, intentosNoFallidos = 0;
	scene.hang.visible = false;
	scene.text1.visible = true;
	for (var i = 0; i < palabra.length; i++) {
		console.l
		var charAt = palabra.charAt(i);
		if (charAt != ' ') {
			lin['line_' + i] = new lib.line("synched", 0);
			lin['line_' + i].name = "letter" + i;
			lin['line_' + i].setTransform(40 + (30 + 50 * i), 475, 1, 1, 0, 0, 0, 19, 2.5);
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

function playSopa(lib, scene, palabras, coor){
	var abc = "abcdefghijklmnñopqrstuvwxyz".toUpperCase();
	var xInit = 54.5,
	yInit = 42.5,
	count = palabras.length;

	var palabraFormadaCoor = [],
	palabraFormadaNode = [],
	palabraFormada = "";

	var colors = ["#ed3405", "#da5f0c", "#e19d00", "#f9c907"];
	var color = "",
	auxColor = "#4C4C4C";




	//dado el array palabras y las coordenadas coor se ingresan estas en la sopa de letras
	// el array coor sera un array de arrays, cada sub-array tendra el siguiente formato
	// [i, j, D] 
	// i sera la fila donde se asignara la primera letra
	// j sera la columna donde se asignara la primera letra
	// D es la direccion, donde 0 es horizontal,1 vertical y cualquier otro numero diagonal
	function ingresarPalabras(){
		var bool, bool2, a, b;
		for(var i=0; i<palabras.length; i++){
			bool = coor[i][2] == 0;
			bool2 = coor[i][2] == 1;
			for(var j=0; j<palabras[i].length; j++){
				if(bool){
					a = coor[i][1]+j;
					matriz[coor[i][0]][a].text.text = palabras[i].charAt(j);
				}else if(bool2){
					b = coor[i][0]+j;
					matriz[b][coor[i][1]].text.text = palabras[i].charAt(j);
				}else{
					a = coor[i][1]+j;
					b = coor[i][0]+j;
					matriz[b][a].text.text = palabras[i].charAt(j);
				}
			}
		}
	}

	//retorna un numero aleatorio del 0 a limit, sin contar limit
	function random(limit) {
		return Math.floor(Math.random() * limit);
	}

	var matriz = new Array(13);
	for (var i = 0; i < 13; i++) {
		matriz[i] = new Array(13);
	}

	function casilla(letra1, posX, posY) {
		var tmp = new lib.letra("synched", 0);
		tmp.text.text = letra1;
		tmp.setTransform(xInit + (34.6 * posX), yInit + (35 * posY), 1, 1, 0, 0, 0, 17.3, 17.5);
		matriz[posY][posX] = tmp;
		tmp.addEventListener('click', function() {
			validar(posY, posX)
		});
		return tmp;
	}
	// retorna true si es adyacente a las antiguas casillas marcadas
	function adyacente(i, j) {
		var coor;
		for (var h = 0; h < palabraFormada.length; h++) {
			coor = palabraFormadaCoor[h];
			if ((coor[0] == i) && (Math.abs(coor[1] - j) == 1)) {
				return true;
			} else if ((coor[1] == j) && (Math.abs(coor[0] - i) == 1)) {
				return true;
			} else if((Math.abs(coor[1] - j) == 1) && (Math.abs(coor[0] - i) == 1)){
				return true;
			}
		}
		return false;
	}

	function encontrada() {
		for (var i = 0; i < palabras.length; i++) {
			if (palabras[i] == palabraFormada) {
				console.log("tea");
				return true;
			}
		}
		return false;
	}

	function validar(i, j) {
		var cas = matriz[i][j];
		if (palabraFormada.length == 0 || adyacente(i, j)) {
			color = (palabraFormada.length == 0 ? colors[random(colors.length)] : color);
			palabraFormadaCoor[palabraFormada.length] = [i, j];
			palabraFormadaNode[palabraFormada.length] = cas;
			palabraFormada = palabraFormada + cas.text.text;
			aux = cas.text.color;
			cas.text.color = color;
		}else {
			for (var k = 0; k < palabraFormadaNode.length; k++) {
				palabraFormadaNode[k].text.color = auxColor;
			}
			palabraFormadaNode = [];
			palabraFormadaCoor = [];
			palabraFormada = "";
			validar(i, j);
		}
		if(encontrada()){
			palabras.splice(palabras.indexOf(palabraFormada), 1);
			count--;
			palabraFormadaNode = [];
			palabraFormadaCoor = [];
			palabraFormada = "";
		}
		if(count == 0){
			scene.removeAllChildren();
			scene.gotoAndStop(scene.currentFrame + 1);
		}
	}

	for (var i = 0; i < 13; i++) {
		for (var j = 0; j < 13; j++) {
			scene.addChild(casilla(abc.charAt(random(abc.length)), i, j));
		}
	}
	console.log(matriz[1][1].text.text);
	ingresarPalabras();
	console.log(matriz[1][1].text.text);

}