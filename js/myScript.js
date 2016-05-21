/*funcion para iniciar un juefo de ahorcado
*lib es la libreria usadar por CreateJS en Animate CC
*scene es la escena en la cual se esta trabajando
*palabra es una string que determina la palabra a descubrir
*/
function playAhorcado(lib, scene, palabra){
	var lin = {}; // array para guardar las lineas agregadas por codigo al juego
	var intentoFallido = 0 // variable para contar los intentos considerados no correctos
	, intentosNoFallidos = 0;// variable para contar los intentos correctos
	scene.hang.visible = false;//hago no visible a la movie clip que representa al ahorcado
	scene.text1.visible = true;//hago visible el texto guia del inicio del juego
	scene.hang.gotoAndStop(0);//se reinicia la animacion del ahorcado
	for (var i = 0; i < palabra.length; i++) {
		//charAt es una funcion propia de JS que retorna el caracter en la posicion i, la primera posicion es 0
		var charAt = palabra.charAt(i);
		if (charAt != ' ') { //si es un caracter de espacio se omite
			lin['l_' + i] = new lib.line("synched", 0); //se instancia un nuevo objeto line en el array lin
			lin['l_' + i].name = "letter" + i; //se le asigna el nombre "letter" + i al objeto
			lin['l_' + i].setTransform(40 + (30 + 50 * i), 475, 1, 1, 0, 0, 0, 19, 2.5); //esta funcion puede trasladar o rotar un objeto de CreateJS
			//mas informacion: http://www.createjs.com/docs/easeljs/classes/DisplayObject.html#method_setTransform
			lin['l_' + i].letter.text = ' '; // se le asigna a la propiedad texto un caracter espacio para que la palabra no aparesca en el layout
			scene.addChild(lin['l_' + i]);//a la escena se le agrega al objeto instanciado para que este lo recozca y lo agregre al layout
		}
	}
	/*
	*funcion para determinar si un caracter esta en la palabra o no
	*retorna true si el caracter se encuentra en la palabra, false en otro caso
	*/
	function isCorrect(character) {
		var o = false;//variable temporal
		for (var i = 0; i < palabra.length; i++) { //recorro toda la palabra, caracter por caracter
			if (palabra.charAt(i).toUpperCase() == character) { //revisa si el caracter es igual al caracter i de la string
				if(!(scene.getChildByName("letter" + i).letter.text == palabra.charAt(i))){ //revisa si el caracter ya fue propuesto antes
					intentosNoFallidos += 1 ; //si no ha sido propuesto antes se aumenta en 1 la variable de intentos correctos
				}
				scene.getChildByName("letter" + i).letter.text = palabra.charAt(i);//se cambia el caracter de espacio asignado antes por el caracter correspondiente para que lo muestre en el layout
				o = true// asigna true a la variable temporal para despues retornarla
				//se retornaria de inmediato pero se tiene que revisar toda la string para caracteres repetidos
			}
		}
		return o;// se retorna el valor de o
	}// esta funcion sale mas desente con la funcion indexOf()

	//finaliza el juego
	function finishGame(){
		for(var i=0; i < palabra.length; i++) { // remueve todas las lineas y caracteres que se tiene desde el inicio
			console.log(lin['l_' + i].text);
			scene.removeChild(lin['l_' + i]);
		}
		for( ; intentoFallido >= 0; intentoFallido--){//remueve todas las lineas y caracteres que se fueron agregando en los intentos fallidos
			scene.removeChild(lin[['wrong_' + intentoFallido]]);
		}
		document.onkeydown = null; // se re-asigna la funcion que recibe los eventos del teclado
	}
	//se asigna la funcion al evento de presionar tecla
	document.onkeydown = function (event) { //event es un objeto que representa el evento, tiene informacion til
		scene.text1.visible = false; //desde que se presiona una letra se hace invisible el texto guia para dejar espacio a los intentos fallidos
		var character1 = String.fromCharCode(event.keyCode); //keyCode devuelve un codigo que representa un caracter, la funcion fromCharCode vuelve este codigo a un caracter
		var a ;
		if(intentoFallido > 2){ //si se tiene mas de 2 intentos fallidos se cambia la posicion en "y", en los siguientes intentos fallidos
		a = 300;
		}else if(intentoFallido > 4){//si se tiene mas de cuatro se cambia la posicion en "y", en los siguientes intentos fallidos
			a = 380;
		}else{
			a = 220;//el caso dafault para la posicion en "y"
		}
		if (!isCorrect(character1)) { //si el caracter no esta en la palabra
			lin['wrong_' + intentoFallido] = new lib.line("synched", 0); //se crea un nuevo objeto line
			lin['wrong_' + intentoFallido].setTransform(80 + (80 * (intentoFallido % 3)), a, 1, 1, 0, 0, 0, 19, 2.5); //se pocisiona, cada 3 intentos incorrectos salta de linea
			lin['wrong_' + intentoFallido].letter.text = character1;// se asigna el caracter que no esta en la palabra para visualizar
			scene.addChild(lin['wrong_' + intentoFallido]); //se agrega a la scene para que lo muestre
			intentoFallido++;//se aumenta en 1 los intentos fallidos
			scene.hang.gotoAndStop(intentoFallido);//el objeto hang es una movieClip con sus propios frames, asi se va dibujando el ahorcado cada vez que falla
			scene.hang.visible = true; //como estaba no visible se le asigna true para poder visualizarlo
		}
		if (intentoFallido == 7) { //si el numero de fallos es igual al numero de intentos permitidos
			finishGame();// se termina el juego
			scene.gotoAndStop(scene.currentFrame+1);//se va a la siguiente frame
		}else if(intentosNoFallidos == palabra.length){//si el intento de intentos exitosos son iguales a la longitud de la palabra
			DepartamentosDescubiertos.push(palabra == "BOGOTA" ? "BOGOTA D.C" : palabra);
			mapLayer.selectAll('path')
			.style({ opacity : function(d){return descubierto(d)? 1 : 0}});
			finishGame();//se termina el juego
			scene.gotoAndStop(scene.currentFrame+2);//salta 2 frames
		}
	}
}

function playSopa(lib, scene, palabras, coor){
	var abc = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Arreglo para sacar caracteres aleatorios
	var xInit = 54.5,//posicion inicial en X
	yInit = 42.5;//posicion inicial en Y

	var palabraFormadaCoor = [],//arreglo que va guardando las coordenadas de la formada
	palabraFormadaNode = [],//arreglo que va guardando los objetos que contienen las letras de la palabra formada en CreateJS
	palabraFormada = "";//string que va guardando la palabra que se forma
	DepartamentosDescubiertos.push(palabraFormada);
	var colors = ["#ed3405", "#da5f0c", "#e19d00", "#f9c907"];//colores para seleccion al azar
	colortm = "",//variable auxiliar para que una palabra quede con el mismo color
	auxColor = "#4C4C4C";//color por defecto de las letras

	//crea una matriz o un arreglo de arreglos de 13x13 para manipular la sopa de letras en el codigo
	var matriz = new Array(13);
	for (var i = 0; i < 13; i++) {
		matriz[i] = new Array(13);
	}

	for (var i = 0; i < 13; i++) {//se recorre las filas de la matriz
		for (var j = 0; j < 13; j++) {//se recorre las columnas de cada fila de la matriz
			scene.addChild(casilla(abc.charAt(random(abc.length)), i, j));//se agraga como hijo de scene para que se visualize,
		}//abc.charAt(random(abc.length)) estoy devuelve una letra aleatoria de la string que contiene todo el abecedario
	}

	//retorna un numero aleatorio del 0 a limit, sin contar limit
	function random(limit) {
		return Math.floor(Math.random() * limit);
	}


	//dado el array palabras y las coordenadas coor se ingresan estas en la sopa de letras
	// el array coor sera un array de arrays, cada sub-array tendra el siguiente formato
	// [i, j, D]
	// i sera la fila donde se asignara la primera letra
	// j sera la columna donde se asignara la primera letra
	// D es la direccion, donde 0 es horizontal,1 vertical y cualquier otro numero diagonal
	function ingresarPalabras(){
		var bool, bool2, a, b ;//variables temporales
		for(var i=0; i<palabras.length; i++){//recorro el arreglo de palabras a ingresar
			bool = coor[i][2] == 0;// si la direccion es 0, bool es true
			bool2 = coor[i][2] == 1;// si la direccion es 1, bool2 es true
			var sinEspacios = palabras[i].replace(/\s+/g, '');
			for(var j=0; j<sinEspacios.length; j++){//recorro la palabra de la posicion i del arreglo
				if(bool){//horizontal
					a = coor[i][1]+j;//asigno a la coordenada de la columna + j
					matriz[coor[i][0]][a].text.text = sinEspacios.charAt(j);// a la matriz se le asigna el caracter j-esimo siempre en la fila coor[i][0] y se cambia la columna hasta j=tamaño de la palabra
				}else if(bool2){//vertical
					b = coor[i][0]+j;//asigno a la coordenada de la fila + j
					matriz[b][coor[i][1]].text.text = sinEspacios.charAt(j);// a la matriz se le asigna el caracter j-esimo siempre en la columna coor[i][0] y se cambia la fila hasta j=tamaño de la palabra
				}else{//diagonal
						a = coor[i][1]+j;//asigno a la coordenada de la columna + j
						b = coor[i][0]+j;//asigno a la coordenada de la fila + j
						matriz[b][a].text.text = sinEspacios.charAt( j);//// a la matriz se le asigna el caracter j-esimo y se cambia la fila y la columna hasta j=tamaño de la palabra
				}
				if(j==13){
					break;
				}
			}
		}
	}

	ingresarPalabras();//se llama a la funcion
	//funcion que crea un objeto letra con el caracter letra1, la posX, y la posY se usa para la posicion en la matriz, y el layout
	function casilla(letra1, posX, posY) {
		var tmp = new lib.letra("synched", 0); //crea el objeto en la variable tmp
		tmp.text.text = letra1; //asigna el texto
		tmp.setTransform(xInit + (34.6 * posX), yInit + (35 * posY), 1, 1, 0, 0, 0, 17.3, 17.5); //le asigna la posicion de acuerdo con posX y posY
		matriz[posY][posX] = tmp; //asigna la variable a la matris en la posicion posX y posY
		tmp.addEventListener('click', function() { //se le agrega la funcion validar con el evento click
			validar(posY, posX)
		});
		return tmp; //retorna el objeto creado
	}
	// retorna true si es adyacente a las antiguas casillas marcadas
	function adyacente(i, j) {
		var coor;
		for (var h = 0; h < palabraFormada.length; h++) { //se recorre todo el array de palabraFormada
			coor = palabraFormadaCoor[h]; // se le asigna las coordenadas de palabraFormada h
			if ((coor[0] == i) && (Math.abs(coor[1] - j) == 1)) { //si esta en la misma fila y la diferencia entre las columna es 1 entonces son adyasentos
				return true;//retorna true
			} else if ((coor[1] == j) && (Math.abs(coor[0] - i) == 1)) {//si esta en la misma columna y la diferencia entre las fila es 1 entonces son adyasentos
				return true;//retorna true
			} else if((Math.abs(coor[1] - j) == 1) && (Math.abs(coor[0] - i) == 1)){//si la diferencia entre las filas y las columnas es 1 entonces son adyasentes diagonalmente
				return true;//retorna true
			}
		}
		return false;//si no encontro ninguna caso verdadero, retorna false
	}
	//funcion que retorna true si una palabra fue encontrada
	function encontrada() {
		for (var i = 0; i < palabras.length; i++) {//recorre todo el array palabras
			if("SANANDRES" == palabras[i]){
					DepartamentosDescubiertos.push("SAN ANDRES Y PROVIDENCIA");
					return true
			}else if(palabras[i].replace(/\s+/g, '') == palabraFormada || palabras[i].replace(/\s+/g, '').includes( palabraFormada )){
				palabraFormada = palabras[i];
			}
			if (palabras[i] == palabraFormada) {//si la palabra que ha estado formando es igual a la palabra i
				return true;//retorna true
			}
		}
		return false;//retorna false si no encontro ninguna palabra igual
	}
	//funcion que maneja toda la jugabilidad
	function validar(i, j) {
		var cas = matriz[i][j];// se crea la variable cas con el nodo de la matriz en la posicion i-j
		if (palabraFormada.length == 0 || adyacente(i, j)) {//si es la primera letra escogida o si es adyasente a una letra ya escogida
			colortm = (palabraFormada.length == 0 ? colors[random(colors.length)] : colortm); //se le asigna un nuevo color a "color" que sera con los que se pintaran las siguientes letras a la primera
			palabraFormadaCoor[palabraFormada.length] = [i, j];//se le agrega las coordenadas a la coleccion coord
			palabraFormadaNode[palabraFormada.length] = cas;//se le asigna los valores al array de nodes
			palabraFormada = palabraFormada + cas.text.text;//se concadena la string ya formada y el nuevo caracter seleccionado
			aux = cas.text.color; //se guerda el color aleatorio para las otras letras
			cas.text.color = colortm; //al texto se le asigna al atributo color el color aleatorio
		}else {//el otro caso es que no sea una letra adyasente a las seleccionadas anteriormente
			for (var k = 0; k < palabraFormadaNode.length; k++) {//se recorre toda la palabra
				palabraFormadaNode[k].text.color = auxColor;//se le asigna el color dafault
			}
			palabraFormadaNode = [];//se vacia el array
			palabraFormadaCoor = [];//se vacia el array
			palabraFormada = "";//se vacia la string
			validar(i, j);//se llama de nuevo la funcion para que tome la nueva letra como primera
		}
		if(encontrada()){//si se completa una palabra
			palabras.splice(palabras.indexOf(palabraFormada), 1); //se elimina la palabra del array de palabras
			DepartamentosDescubiertos.push(palabraFormada);
			palabraFormadaNode = [];//se vacia el array
			palabraFormadaCoor = [];//se vacia el array
			palabraFormada = "";//se vacia la string
			mapLayer.selectAll('path')
			.style({ opacity : function(d){return descubierto(d)? 1 : 0}});
		}
		if(palabras.length == 0){//si el array de palabras esta vacio se termina el juego
			scene.removeAllChildren();//se borran todas las letras de la sopa
			scene.gotoAndStop(scene.currentFrame+1);//se va a la siguiente frame
		}
	}
}
