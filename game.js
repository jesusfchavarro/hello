(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/background1.png?1463620380390", id:"background1"}
	]
};



// symbols:



(lib.background1 = function() {
	this.initialize(img.background1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,602,599);


(lib.plataform = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(15.4,1,1).p("AJFAAIyJAA");
	this.shape.setTransform(58.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(15.4,1,1).p("Am2lCINsKF");
	this.shape_1.setTransform(160.2,376.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(15.4,1,1).p("AHblRIu1Kj");
	this.shape_2.setTransform(68.7,377.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(15.4,1,1).p("AAA63MAAAA1v");
	this.shape_3.setTransform(116.3,172);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(16.1,1,1).p("AkAlXIIBKv");
	this.shape_4.setTransform(90.5,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-8,219.5,427.4);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{charA:0});

	// letter
	this.letter = new cjs.Text("a", "70px 'Kanover'");
	this.letter.name = "letter";
	this.letter.textAlign = "center";
	this.letter.lineHeight = 75;
	this.letter.lineWidth = 33;
	this.letter.setTransform(17.8,-63.7);

	this.timeline.addTween(cjs.Tween.get(this.letter).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiVAYQgVAAgIgFQgJgGgBgLQgCgKAIgHQAEgEAIgCQALgDAQAAIEfAAQATAAALAFQAHADAFAGQAEAHAAAFQgBANgQAGQgIAEgTAAg");
	this.shape.setTransform(19,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-63.7,38.1,88);


(lib.letra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("A ", "25px 'Arial'", "#4C4C4C");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 31;
	this.text.setTransform(0,0,0.989,1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,0,34.6,35);


(lib.hangman1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(15.4,1,1).p("Ahzl7QBzINB0Dq");
	this.shape.setTransform(46,199.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7).to({_off:false},0).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(15.4,1,1).p("ABNlIQiiFXAKE6");
	this.shape_1.setTransform(19,204.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6).to({_off:false},0).wait(2));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(11,1,1).p("AiOlXQEtFXgQFY");
	this.shape_2.setTransform(52.2,119.9);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5).to({_off:false},0).wait(3));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(11,1,1).p("ACBlbQk4FbBDFc");
	this.shape_3.setTransform(12.9,124.4);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(4));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(29.4,1,1).p("AAAltIAALb");
	this.shape_4.setTransform(34.4,133.7);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3).to({_off:false},0).wait(5));

	// Layer 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(7.7,1,1).p("ACyAAQAABKg1A0Qg0A0hJAAQhJAAg0g0Qg0g0AAhKQAAhIA0g1QA0g0BJAAQBJAAA0A0QA1A1AABIg");
	this.shape_5.setTransform(26.6,71.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah9B+Qg0g1AAhJQAAhJA0g0QA1g0BIAAQBKAAAzA0QA1A0AABJQAABJg1A1QgzA0hKAAQhIAAg1g0g");
	this.shape_6.setTransform(26.6,71.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).wait(6));

	// Layer 8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(7.7,1,1).p("AAAlDIAAKH");
	this.shape_7.setTransform(44.4,32.4);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({_off:false},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hangman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(15.4,1,1).p("AJFAAIyJAA");
	this.shape.setTransform(74.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(15.4,1,1).p("Am2lCINsKF");
	this.shape_1.setTransform(176.7,376.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(15.4,1,1).p("AHblRIu1Kj");
	this.shape_2.setTransform(85.2,377.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(15.4,1,1).p("AAA63MAAAA1v");
	this.shape_3.setTransform(132.8,172);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(15.4,1,1).p("Ahzl7QBzINB0Dq");
	this.shape_4.setTransform(46,199.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(15.4,1,1).p("ABNlIQiiFXAKE6");
	this.shape_5.setTransform(19,204.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(11,1,1).p("AiOlXQEtFXgQFY");
	this.shape_6.setTransform(52.2,119.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(11,1,1).p("ACBlbQk4FbBDFc");
	this.shape_7.setTransform(12.9,124.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(29.4,1,1).p("AAAltIAALb");
	this.shape_8.setTransform(34.4,133.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(7.7,1,1).p("ACyAAQAABKg1A0Qg0A0hJAAQhJAAg0g0Qg0g0AAhKQAAhIA0g1QA0g0BJAAQBJAAA0A0QA1A1AABIg");
	this.shape_9.setTransform(26.6,71.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah9B+Qg0g1AAhJQAAhJA0g0QA1g0BIAAQBKAAAzA0QA1A0AABJQAABJg1A1QgzA0hKAAQhIAAg1g0g");
	this.shape_10.setTransform(26.6,71.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(7.7,1,1).p("AAAlDIAAKH");
	this.shape_11.setTransform(44.4,32.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(16.1,1,1).p("AkAlXIIBKv");
	this.shape_12.setTransform(107,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-8,233.7,427.4);


(lib.tryAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tryAgain = new cjs.Text("clickeame para\nintentarlo\notra vez", "48px 'Kanover'");
	this.tryAgain.name = "tryAgain";
	this.tryAgain.textAlign = "center";
	this.tryAgain.lineHeight = 52;
	this.tryAgain.lineWidth = 246;
	this.tryAgain.setTransform(123,0);

	this.timeline.addTween(cjs.Tween.get(this.tryAgain).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,159.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Sencillo\nsolo tienes que\nencontrar 5\npalabras\n\nPlay! ", "68px 'Copperplate Gothic Bold'", "#454545");
	this.text.textAlign = "center";
	this.text.lineHeight = 78;
	this.text.lineWidth = 595;
	this.text.setTransform(248.3,0.1,0.835,0.872);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,500,430);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("¿listo para el\nsiguiente reto?\nclick me!", "70px 'Kanover'");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.lineWidth = 492;
	this.text.setTransform(246,202.7);

	this.text_1 = new cjs.Text("You \nRock!", "88px 'Kanover'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 94;
	this.text_1.lineWidth = 160;
	this.text_1.setTransform(245.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,496,487.6);


(lib.play1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.play1 = new cjs.Text("PLAY", "80px 'Kanover'");
	this.play1.name = "play1";
	this.play1.textAlign = "center";
	this.play1.lineHeight = 86;
	this.play1.lineWidth = 156;
	this.play1.setTransform(78,0);
	this.play1.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,0,4);

	this.timeline.addTween(cjs.Tween.get(this.play1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-5,174,109);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var scene = this;
		var lin = {};
		var palabra = "Hangman";
		palabra = "";
		for (var i = 0; i < palabra.length; i++) {
			console.log(scene.children.length);
			var charAt = palabra.charAt(i);
			if (charAt != ' ') {
				lin['line_' + i] = new lib.line("synched", 0);
				lin['line_' + i].setTransform(40 + (30 + 50 * i), 475, 1, 1, 0, 0, 0, 19, 2.5);
				lin['line_' + i].letter.text = (charAt == 'a' ? ' ' : charAt);
				scene.addChild(lin['line_' + i]);
			}
		}
		
		this.play1.addEventListener('click', function () {
			for (var i = 0; i < palabra.length; i++) {
				scene.removeChild(lin['line_' + i]);
			}
			scene.gotoAndStop(scene.currentFrame+1);
		});
	}
	this.frame_1 = function() {
		this.stop();
		var scene = this;
		playAhorcado(lib,scene,"Bogota");
	}
	this.frame_2 = function() {
		var scene = this;
		this.tryAgain.addEventListener('click', function () {
			scene.gotoAndStop(scene.currentFrame-1);
		});
	}
	this.frame_3 = function() {
		var scene = this;
		this.goto4.addEventListener('click', function () {
			scene.gotoAndStop(scene.currentFrame+1);
		});
	}
	this.frame_4 = function() {
		var scene = this;
		
		scene.play2.addEventListener('click', function (){
			scene.gotoAndStop(scene.currentFrame+1);
		});
	}
	this.frame_5 = function() {
		var scene = this;
		scene.play2.visible = false;
		var palabras = [ "CHOCO", "META", "QUINDIO", "HUILA", "BOYACA", "ARAUCA"];
		var coor = [[3, 7, 1],
							 [12, 2, 0],
							 [1, 1, 2],
							 [1, 2, 1],
							 [10, 2, 0],
							 [0, 7 ,2]];
		//scene.rem
		playSopa(lib,scene,palabras,coor);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(2));

	// scripts
	this.text1 = new cjs.Text("Presiona la letra\nque creas estar en\nla palabra, tienes\n6 intentos.", "45px 'Kanover'");
	this.text1.name = "text1";
	this.text1.textAlign = "center";
	this.text1.lineHeight = 49;
	this.text1.lineWidth = 285;
	this.text1.setTransform(153.1,133.3,0.833,0.833);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4C").s().p("AARAmIAAgCQAEgBAAgDIgCgGIgEgHIghAAIgEAIIgCAFQABADAEABIAAACIgcAAIAAgCIAEgCIACgEIAcg3IACgGQAAgCgEgCIAAgCIAcAAIAAACQgDACAAADIABAFIAdA1IAEAGQAAAAABAAQAAABAAAAQABAAABAAQAAABABAAIAAACgAgNAIIAXAAIgLgXg");
	this.shape.setTransform(457.1,488.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AALAmIAAgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIgCgFIgNgWIgSAAIAAAZIABADQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAAACIgbAAIAAgCIADgCIABgDIAAg9IgBgDIgDgCIAAgCIAwAAIAPABQAFABAEADQAIAFAAAMQAAAKgFAFQgFADgLACIAOAVIAHAHQACACADABIAAACgAgTgGIAZAAIAKgBQAEgCAAgFQAAgFgDgCQgDgCgIAAIgZAAg");
	this.shape_1.setTransform(447.6,488.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4C").s().p("AgpAmIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIA0AAQAOAAAHAFQAHAGAAAJQAAAFgDAEQgCADgGAEIAIADQAGAFAAAIQAAALgJAGQgHAGgOAAgAgSAYIAbAAQAOAAAAgKQAAgKgOAAIgbAAgAgSgIIAaAAQAHAAACgCQADgBAAgFQAAgEgDgBQgCgCgHAAIgaAAg");
	this.shape_2.setTransform(438,488.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4C").s().p("AARAmIAAgCQAEgBAAgDIgCgGIgEgHIghAAIgEAIIgCAFQABADAEABIAAACIgcAAIAAgCIAEgCIACgEIAcg3IACgGQAAgCgEgCIAAgCIAcAAIAAACQgDACgBADIACAFIAdA1IAEAGQAAAAABAAQAAABAAAAQABAAABAAQAAABABAAIAAACgAgNAIIAWAAIgKgXg");
	this.shape_3.setTransform(428.3,488.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("AAiAoIgCgEIgDgBIhAAAIAAgBIAEgCIABgEIAAg8IgBgDIgEgCIAAgCIAcAAIAAACIgEACIgBADIAAA2IApAAIADgCIACgDIACAAIAAAXg");
	this.shape_4.setTransform(419.6,488.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("AARAmIAAgCQAEgBAAgDIgBgGIgFgHIghAAIgEAIIgBAFQAAADAEABIAAACIgcAAIAAgCIAEgCIADgEIAbg3IACgGQAAgCgDgCIAAgCIAbAAIAAACQgEACABADIABAFIAdA1IAEAGQAAAAABAAQAAABAAAAQABAAABAAQAAABABAAIAAACgAgNAIIAXAAIgLgXg");
	this.shape_5.setTransform(410.6,488.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4C").s().p("AgnAmIAAgCIADgCIABgDIAAg9IgBgDIgDgCIAAgCIAvAAQAQAAAHAFQAFACACAFQACAFABAGQAAALgJAEQgHAFgRAAIgZAAIAAAZIABADQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAIAAACgAgRgGIAYAAIAKgBQAFgCAAgFQAAgGgFgCIgKgBIgYAAg");
	this.shape_6.setTransform(401.3,488.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4C").s().p("AAQAmIAAgCQAFgBAAgDIgBgGIgFgHIghAAIgEAIIgBAFQgBADAFABIAAACIgcAAIAAgCIADgCIAEgEIAcg3IABgGQAAgCgDgCIAAgCIAbAAIAAACQgEACAAADIACAFIAdA1IAEAGQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAIAAACgAgNAIIAWAAIgKgXg");
	this.shape_7.setTransform(388.2,488.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4C").s().p("AAiAoIgCgEIgDgBIhAAAIAAgBIAEgCIABgEIAAg8IgBgDIgEgCIAAgCIAcAAIAAACIgEACIgBADIAAA2IApAAIADgCIACgDIACAAIAAAXg");
	this.shape_8.setTransform(379.5,488.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("AAlAqIgCgDIgDgBIhGAAIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIBEAAIADgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACAAIAAAWIgCAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgBIgtAAIAAARIAbAAIADgBIACgDIACAAIAAAUIgCAAIgCgEIgDgBIgbAAIAAATIAvAAIADgBIACgEIACAAIAAAXg");
	this.shape_9.setTransform(367.3,488.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4C").s().p("AgqAmIAAgCIADgCIABgDIAAg9IgBgDIgDgCIAAgCIArAAQAOAAAIAEQAMAFAEALQAEAIAAAJQAAATgMAKQgFAFgHACQgHACgLAAgAgTAYIATAAQAMAAAGgGQAHgHgBgLQABgKgHgHQgDgDgFgBQgFgCgFAAIgTAAg");
	this.shape_10.setTransform(357.9,488.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4C").s().p("AgfAgIgCAAIgDABIgBAAIAIgTIABABIAAAAIACADQADADAJACQAIADAGAAQAHAAAGgCQAHgDAAgFQAAgEgFgCIgMgCIgIAAIgOgCIgIgDQgEgDgCgDQgDgFAAgFQAAgNALgGQAKgGAOAAQAGAAAHABIAQAGIAEACIADgCIACABIgKASIgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAAAgBgBQgEgDgHgCQgIgDgGAAQgGAAgFACQgIADAAAFQAAADAEACQADABALABIAIABQAPABAHAEQAEACADADQADAFAAAGQAAAMgLAHQgKAGgRAAQgPAAgQgHg");
	this.shape_11.setTransform(345.1,488.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4C").s().p("AAQAmIAAgCQAFgBAAgDIgBgGIgFgHIghAAIgEAIIgBAFQgBADAFABIAAACIgcAAIAAgCIADgCIAEgEIAcg3IABgGQAAgCgDgCIAAgCIAbAAIAAACQgEACAAADIACAFIAdA1IAEAGQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAIAAACgAgNAIIAWAAIgKgXg");
	this.shape_12.setTransform(336,488.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4C").s().p("AALAmIAAgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIgCgFIgNgWIgSAAIAAAZIABADQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAAACIgbAAIAAgCIADgCIABgDIAAg9IgBgDIgDgCIAAgCIAwAAIAPABQAFABAEADQAIAFAAAMQAAAKgFAFQgFADgLACIAOAVIAHAHQACACADABIAAACgAgTgGIAZAAIAKgBQAEgCAAgFQAAgFgDgCQgDgCgIAAIgZAAg");
	this.shape_13.setTransform(326.5,488.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C4C4C").s().p("AgMAoIAAgCIADgCIABgDIAAg1IgWAAIgDABIgCACIgCAAIAAgWIACAAIABADIAEABIA9AAIAEgBIABgDIACAAIAAAWIgCAAIgBgCIgEgBIgWAAIAAA1IABADQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAAACg");
	this.shape_14.setTransform(317.5,488.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C4C4C").s().p("AAlAqIgCgDIgDgBIhGAAIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIBEAAIADgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACAAIAAAWIgCAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgBIgtAAIAAARIAbAAIADgBIACgDIACAAIAAAUIgCAAIgCgEIgDgBIgbAAIAAATIAvAAIADgBIACgEIACAAIAAAXg");
	this.shape_15.setTransform(309.1,488.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C4C4C").s().p("AAiAoIgCgEIgDgBIhAAAIAAgBIAEgCIABgEIAAg8IgBgDIgEgCIAAgCIAcAAIAAACIgEACIgBADIAAA2IApAAIADgCIACgDIACAAIAAAXg");
	this.shape_16.setTransform(300.8,488.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4C4C4C").s().p("AgfAgIgCAAIgDABIgBAAIAIgTIABABIAAAAIACADQADADAJACQAIADAGAAQAHAAAGgCQAHgDAAgFQAAgEgFgCIgMgCIgIAAIgOgCIgIgDQgEgDgCgDQgDgFAAgFQAAgNALgGQAKgGAOAAQAGAAAHABIAQAGIAEACIADgCIACABIgKASIgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAAAgBgBQgEgDgHgCQgIgDgGAAQgGAAgFACQgIADAAAFQAAADAEACQADABALABIAIABQAPABAHAEQAEACADADQADAFAAAGQAAAMgLAHQgKAGgRAAQgPAAgQgHg");
	this.shape_17.setTransform(288.7,488.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4C4C4C").s().p("AARAmIAAgCQAEgBAAgDIgBgGIgFgHIghAAIgEAIIgBAFQAAADAEABIAAACIgcAAIAAgCIAEgCIACgEIAcg3IACgGQAAgCgDgCIAAgCIAbAAIAAACQgEACABADIABAFIAdA1IAEAGQAAAAABAAQAAABAAAAQABAAABAAQAAABABAAIAAACgAgNAIIAXAAIgLgXg");
	this.shape_18.setTransform(279.6,488.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C4C4C").s().p("AAiAoIgCgEIgDgBIhAAAIAAgBIAEgCIABgEIAAg8IgBgDIgEgCIAAgCIAcAAIAAACIgEACIgBADIAAA2IApAAIADgCIACgDIACAAIAAAXg");
	this.shape_19.setTransform(270.9,488.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4C4C4C").s().p("AARAmIAAgCQABAAABgBQAAAAABAAQAAAAAAgBQAAAAAAgBIgBgCIgDgEIgngmIAAAqIACADQAAAAAAAAQAAABABAAQAAAAAAAAQABABABAAIAAACIgaAAIAAgCIADgCIACgDIAAg9IgCgDIgDgCIAAgCIAdAAIAAACQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAAAQAAABABABQAAAAABABIAnAmIAAgoIgBgDIgEgCIAAgCIAaAAIAAACIgDACIgBADIAAA9IABADQAAAAAAAAQAAABABAAQAAAAABAAQAAABABAAIAAACg");
	this.shape_20.setTransform(258,488.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C4C4C").s().p("AAlAqIgCgDIgDgBIhGAAIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIBEAAIADgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACAAIAAAWIgCAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgBIgtAAIAAARIAbAAIADgBIACgDIACAAIAAAUIgCAAIgCgEIgDgBIgbAAIAAATIAvAAIADgBIACgEIACAAIAAAXg");
	this.shape_21.setTransform(248.3,488.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C4C4C").s().p("AgqAmIAAgCIADgCIABgDIAAg9IgBgDIgDgCIAAgCIArAAQAOAAAIAEQALAFAGALQADAIAAAJQAAATgMAKQgFAFgHACQgHACgLAAgAgTAYIATAAQAMAAAGgGQAGgHAAgLQAAgKgGgHQgDgDgFgBQgEgCgGAAIgTAAg");
	this.shape_22.setTransform(238.9,488.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4C4C4C").s().p("AALAmIAAgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIgCgFIgNgWIgSAAIAAAZIABADQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAAACIgbAAIAAgCIADgCIABgDIAAg9IgBgDIgDgCIAAgCIAwAAIAPABQAFABAEADQAIAFAAAMQAAAKgFAFQgFADgLACIAOAVIAHAHQACACADABIAAACgAgTgGIAZAAIAKgBQAEgCAAgFQAAgFgDgCQgDgCgIAAIgZAAg");
	this.shape_23.setTransform(229.3,488.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4C4C4C").s().p("AgdAeQgOgLAAgTQAAgSAOgLQAMgJARAAQASAAAMAJQAPALAAASQAAATgPALQgMAJgSAAQgRAAgMgJgAgSgQQgHAHAAAJQAAAKAHAHQAIAIAKAAQALAAAIgIQAGgHABgKQgBgJgGgHQgIgIgLAAQgKAAgIAIg");
	this.shape_24.setTransform(219.3,488.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4C4C4C").s().p("AARAmIAAgCQABAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBIgBgCIgEgEIgmgmIAAAqIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAAACIgZAAIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIAeAAIAAACQgBAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAAAQAAABABABQAAAAABABIAnAmIAAgoIgBgDIgDgCIAAgCIAZAAIAAACIgEACIgBADIAAA9IABADQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAIAAACg");
	this.shape_25.setTransform(205.6,488.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4C4C4C").s().p("AAlAqIgCgDIgDgBIhGAAIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIBEAAIADgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACAAIAAAWIgCAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgBIgtAAIAAARIAbAAIADgBIACgDIACAAIAAAUIgCAAIgCgEIgDgBIgbAAIAAATIAvAAIADgBIACgEIACAAIAAAXg");
	this.shape_26.setTransform(196,488.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C4C4C").s().p("AALAmIAAgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIgCgFIgNgWIgSAAIAAAZIABADQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAAACIgbAAIAAgCIADgCIABgDIAAg9IgBgDIgDgCIAAgCIAwAAIAPABQAFABAEADQAIAFAAAMQAAAKgFAFQgFADgLACIAOAVIAHAHQACACADABIAAACgAgTgGIAZAAIAKgBQAEgCAAgFQAAgFgDgCQgDgCgIAAIgZAAg");
	this.shape_27.setTransform(183.3,488.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4C4C4C").s().p("AARAmIAAgCQAEgBAAgDIgBgGIgFgHIghAAIgEAIIgCAFQABADAEABIAAACIgcAAIAAgCIAEgCIACgEIAcg3IACgGQAAgCgEgCIAAgCIAcAAIAAACQgDACAAADIABAFIAdA1IAEAGQAAAAABAAQAAABAAAAQABAAABAAQAAABABAAIAAACgAgNAIIAXAAIgLgXg");
	this.shape_28.setTransform(173.5,488.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4C4C4C").s().p("AASAmIAAgCQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBIgBgCIgEgEIgmgmIAAAqIAAADQABAAAAAAQAAABAAAAQABAAAAAAQABABAAAAIAAACIgZAAIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIAeAAIAAACQgBAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAAAQAAABABABQAAAAABABIAnAmIAAgoIgBgDIgDgCIAAgCIAZAAIAAACIgEACIgBADIAAA9IABADQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAIAAACg");
	this.shape_29.setTransform(163.4,488.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4C4C4C").s().p("AgdAeQgPgLAAgTQAAgSAPgLQAMgJARAAQASAAAMAJQAOALAAASQAAATgOALQgMAJgSAAQgRAAgMgJgAgSgQQgHAHAAAJQAAAKAHAHQAHAIALAAQAMAAAGgIQAIgHgBgKQABgJgIgHQgHgIgLAAQgLAAgHAIg");
	this.shape_30.setTransform(153.2,488.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4C4C4C").s().p("AgMAmIAAgCIADgCIABgDIAAg9IgBgDIgDgCIAAgCIAZAAIAAACIgDACIgBADIAAA9IABADQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAAACg");
	this.shape_31.setTransform(146.2,488.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C4C4C").s().p("AgfAgIgCAAIgDABIgBAAIAIgTIABABIAAAAIACADQADADAJACQAIADAGAAQAHAAAGgCQAHgDAAgFQAAgEgFgCIgMgCIgIAAIgOgCIgIgDQgEgDgCgDQgDgFAAgFQAAgNALgGQAKgGAOAAQAGAAAHABIAQAGIAEACIADgCIACABIgKASIgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAAAgBgBQgEgDgHgCQgIgDgGAAQgGAAgFACQgIADAAAFQAAADAEACQADABALABIAIABQAPABAHAEQAEACADADQADAFAAAGQAAAMgLAHQgKAGgRAAQgPAAgQgHg");
	this.shape_32.setTransform(139.9,488.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4C4C4C").s().p("AAlAqIgCgDIgDgBIhGAAIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIBEAAIADgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACAAIAAAWIgCAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgBIgtAAIAAARIAbAAIADgBIACgDIACAAIAAAUIgCAAIgCgEIgDgBIgbAAIAAATIAvAAIADgBIACgEIACAAIAAAXg");
	this.shape_33.setTransform(131.1,488.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4C4C4C").s().p("AALAmIAAgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIgCgFIgNgWIgSAAIAAAZIABADQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAAACIgbAAIAAgCIADgCIABgDIAAg9IgBgDIgDgCIAAgCIAwAAIAPABQAFABAEADQAIAFAAAMQAAAKgFAFQgFADgLACIAOAVIAHAHQACACADABIAAACgAgTgGIAZAAIAKgBQAEgCAAgFQAAgFgDgCQgDgCgIAAIgZAAg");
	this.shape_34.setTransform(122,488.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4C4C4C").s().p("AgoAmIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIAxAAQAPAAAHAFQAEACADAFQADAFgBAGQABALgJAEQgHAFgQAAIgZAAIAAAZIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAABABAAIAAACgAgQgGIAXAAIALgBQADgCAAgFQAAgGgDgCIgLgBIgXAAg");
	this.shape_35.setTransform(112.6,488.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4C4C4C").s().p("AAlAqIgCgDIgDgBIhGAAIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIBEAAIADgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACAAIAAAWIgCAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgBIgtAAIAAARIAbAAIADgBIACgDIACAAIAAAUIgCAAIgCgEIgDgBIgbAAIAAATIAvAAIADgBIACgEIACAAIAAAXg");
	this.shape_36.setTransform(99.9,488.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4C4C4C").s().p("AgZAhQgHgDgDgHQgCgGAAgJIAAgmIgBgEIgEgCIAAgCIAcAAIAAACIgEACIgBAEIAAAiIABAKQABAEADACQAGAEAIAAQALAAAGgEQACgCABgEQACgEAAgGIAAgiIgBgEIgEgCIAAgCIAaAAIAAACIgEACIgBAEIAAAmQAAAOgFAHQgJAJgYABQgPAAgKgGg");
	this.shape_37.setTransform(90.5,488.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4C4C4C").s().p("AAdAtIABgDIgDgFIgIgJQgJAEgKAAQgSAAgNgJQgOgLAAgSQAAgTAOgLQANgJASAAQAQAAAMAJQAPALAAATQAAAQgMALIAHAHQADADABAAIADgBIABABIgQAPgAgUgXQgGAHAAAKQAAAJAGAHQAIAIAMAAIAJgCQgIgJgGgCIAAgBQAFgDADAAQAHAAAJAHQAFgGAAgIQAAgKgHgHQgHgIgKAAQgMAAgIAIg");
	this.shape_38.setTransform(80.7,489.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4C4C4C").s().p("AAlAqIgCgDIgDgBIhGAAIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIBEAAIADgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACAAIAAAWIgCAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgBIgtAAIAAARIAbAAIADgBIACgDIACAAIAAAUIgCAAIgCgEIgDgBIgbAAIAAATIAvAAIADgBIACgEIACAAIAAAXg");
	this.shape_39.setTransform(67.6,488.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4C4C4C").s().p("AASAmIAAgCQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAgBIgBgCIgDgEIgngmIAAAqIABADQABAAAAAAQAAABAAAAQABAAAAAAQABABABAAIAAACIgaAAIAAgCIADgCIABgDIAAg9IgBgDIgDgCIAAgCIAeAAIAAACQgBAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABABQAAAAABABIAnAmIAAgoIgBgDIgEgCIAAgCIAaAAIAAACIgEACIgBADIAAA9IABADQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAIAAACg");
	this.shape_40.setTransform(57.9,488.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4C4C4C").s().p("AAlAqIgCgDIgDgBIhGAAIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIBEAAIADgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACAAIAAAWIgCAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgBIgtAAIAAARIAbAAIADgBIACgDIACAAIAAAUIgCAAIgCgEIgDgBIgbAAIAAATIAvAAIADgBIACgEIACAAIAAAXg");
	this.shape_41.setTransform(48.2,488.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4C4C4C").s().p("AgMAmIAAgCIADgCIABgDIAAg9IgBgDIgDgCIAAgCIAZAAIAAACIgDACIgBADIAAA9IABADQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAAACg");
	this.shape_42.setTransform(41.6,488.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4C4C4C").s().p("AgMAoIAAgCIADgCIABgDIAAg1IgWAAIgDABIgCACIgCAAIAAgWIACAAIABADIAEABIA9AAIAEgBIABgDIACAAIAAAWIgCAAIgBgCIgEgBIgWAAIAAA1IABADQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAAACg");
	this.shape_43.setTransform(35.6,488.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4C4C4C").s().p("AAlAqIgCgDIgDgBIhGAAIAAgCIAEgCIABgDIAAg9IgBgDIgEgCIAAgCIBEAAIADgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACAAIAAAWIgCAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgBIgtAAIAAARIAbAAIADgBIACgDIACAAIAAAUIgCAAIgCgEIgDgBIgbAAIAAATIAvAAIADgBIACgEIACAAIAAAXg");
	this.shape_44.setTransform(23.7,488.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4C4C4C").s().p("AgiAnIgEgCIgDACIgCgBIAKgXIACABIAAABQAAADADACQAEAEAKADQAJADAGAAQAJAAAHgDQADgCACgDQADgCAAgEQAAgEgFgCIgOgDIgJgBIgPgCIgJgDQgGgDgEgEQgDgGAAgHQAAgMAIgIQALgKAVAAQAHAAAIACQAIACALAFIAFABIAEgBIABABIgLAWIgCgBIAAgBQAAgDgDgCQgNgJgPAAQgGAAgGACQgEABgCADQgDADAAADQAAAFAGACIAPACIAIABQAKABAGACQAGACAEADQAFABADAGQACAFAAAHQAAAJgGAIQgGAHgMADQgJADgKAAQgRAAgSgJg");
	this.shape_45.setTransform(14.1,487.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4C4C4C").s().p("AAFAZIACgEQAAgEgHgKQgGAKAAAEIACAEIgCACIgRgMIACgDIADABQADAAAJgMQgKgBgEAAQgDAAgCABIgCAAIAGgSIADABIAAABQAAACADADIAMAFIgBgOQgBgEgEAAIAAgDIATAAIAAADQgEAAgBAEIgBAOIAMgFQADgDAAgCIAAgBIADgBIAGARIgCABQgCgBgDAAQgEAAgKABIAIAKQACACADAAIACgBIACADIgRAMg");
	this.shape_46.setTransform(5.5,484.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text1}]},1).to({state:[]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[]},1).wait(1));

	// play
	this.text = new cjs.Text("iras\ndescubriendo el\nmapa a medida que\navanzes... buena\nsuerte.", "45px 'Kanover'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 270;
	this.text.setTransform(144.2,28.6,0.833,0.833);

	this.text_1 = new cjs.Text("Comencemos con\nalgo facil", "45px 'Kanover'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 49;
	this.text_1.lineWidth = 265;
	this.text_1.setTransform(146.4,311.9,0.833,0.833);

	this.play1 = new lib.play1();
	this.play1.setTransform(73.5,239.2,0.833,0.833);
	new cjs.ButtonHelper(this.play1, 0, 1, 1);

	this.play2 = new lib.Symbol2();
	this.play2.setTransform(250,188.8,1,1,0,0,0,250,158.8);
	new cjs.ButtonHelper(this.play2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play1},{t:this.text_1},{t:this.text}]}).to({state:[]},1).to({state:[{t:this.play2}]},3).to({state:[]},1).wait(2));

	// gameOver
	this.tryAgain = new lib.tryAgain();
	this.tryAgain.setTransform(154.1,333.8,0.833,0.833,0,0,0,125.1,79.5);
	new cjs.ButtonHelper(this.tryAgain, 0, 1, 1);

	this.instance = new lib.hangman();
	this.instance.setTransform(373.7,209.5,0.833,0.833,0,0,0,111.4,205.7);

	this.text_2 = new cjs.Text("Game\nOver", "92px 'Kanover'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 99;
	this.text_2.lineWidth = 296;
	this.text_2.setTransform(155.3,64.7,0.833,0.833);

	this.goto4 = new lib.Symbol1();
	this.goto4.setTransform(250,271.6,0.833,0.833,0,0,0,247.9,243.8);
	new cjs.ButtonHelper(this.goto4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2},{t:this.instance},{t:this.tryAgain}]},2).to({state:[{t:this.goto4}]},1).to({state:[]},1).to({state:[]},1).wait(2));

	// plataform
	this.instance_1 = new lib.hangman();
	this.instance_1.setTransform(370.7,215.1,0.833,0.833,0,0,0,111.4,205.7);

	this.instance_2 = new lib.plataform();
	this.instance_2.setTransform(376.2,210.4,0.833,0.833,0,0,0,102,205.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(5));

	// hangman
	this.hang = new lib.hangman1();
	this.hang.setTransform(302.1,144.3,0.833,0.833,0,0,0,33.3,120.7);
	this.hang._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hang).wait(1).to({_off:false},0).to({_off:true},1).wait(5));

	// sopa
	this.instance_3 = new lib.letra("synched",0);
	this.instance_3.setTransform(482.7,517.5,1,1,0,0,0,2,17.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

	// Bitmap 1.png
	this.instance_4 = new lib.line("synched",0);
	this.instance_4.setTransform(15.9,536.6,0.833,0.833,0,0,0,19,-29.8);

	this.instance_5 = new lib.background1();
	this.instance_5.setTransform(0,0,0.831,0.835);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FFFFFF","#006799"],[0,1],0.1,-200,0.1,200).s().p("EgnDAfQMAAAg+fMBOHAAAMAAAA+fg");
	this.shape_47.setTransform(250,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.shape_47}]},4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,250,500,581.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;