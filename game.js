(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/background1.png?1463260065555", id:"background1"}
	]
};



// symbols:



(lib.background1 = function() {
	this.initialize(img.background1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,602,599);


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
	this.letter = new cjs.Text("a", "80px 'Kanover'");
	this.letter.name = "letter";
	this.letter.textAlign = "center";
	this.letter.lineHeight = 86;
	this.letter.lineWidth = 33;
	this.letter.setTransform(17.8,-73.7);

	this.timeline.addTween(cjs.Tween.get(this.letter).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiVAYQgVAAgIgFQgJgGgBgLQgCgKAIgHQAEgEAIgCQALgDAQAAIEfAAQATAAALAFQAHADAFAGQAEAHAAAFQgBANgQAGQgIAEgTAAg");
	this.shape.setTransform(19,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-73.7,38.1,88);


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
	//	this.gotoAndStop(4);
		this.stop();
		var scene = this;
		var lin = {};
		var palabra = "Hangman";
		palabra = "";
		for (var i = 0; i < palabra.length; i++) {
			var charAt = palabra.charAt(i);
			if (charAt != ' ') {
				lin['line_' + i] = new lib.line("synched", 0);
				lin['line_' + i].setTransform(40 + (30 + 50 * i), 560, 1, 1, 0, 0, 0, 19, 2.5);
				lin['line_' + i].letter.text = charAt == 'a' ? ' ' : charAt;
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
		playAhorcado(lib,scene,"Bogota",6);
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
		
		var backGroundGradien = new createjs.Shape();
		backGroundGradien.graphics.beginLinearGradientFill(
																["#00b8e6", "#FFFFFF"], 
																[.1,0.9],
																0, 0, 0, 600);
		backGroundGradien.graphics.drawRect(0, 0, 600,600);
		backGroundGradien.graphics.endFill();
		scene.addChild(backGroundGradien);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// scripts
	this.text1 = new cjs.Text("Presiona la letra\nque creas estar en\nla palabra, tienes\n6 intentos.", "45px 'Kanover'");
	this.text1.name = "text1";
	this.text1.textAlign = "center";
	this.text1.lineHeight = 49;
	this.text1.lineWidth = 285;
	this.text1.setTransform(182.6,160);
	this.text1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// play
	this.text = new cjs.Text("iras\ndescubriendo el\nmapa a medida que\navanzes... buena\nsuerte.", "45px 'Kanover'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 270;
	this.text.setTransform(173.1,34.4);

	this.text_1 = new cjs.Text("Comencemos con\nalgo facil", "45px 'Kanover'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 49;
	this.text_1.lineWidth = 265;
	this.text_1.setTransform(175.8,374.3);

	this.play1 = new lib.play1();
	this.play1.setTransform(88.2,287);
	new cjs.ButtonHelper(this.play1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play1},{t:this.text_1,p:{scaleX:1,scaleY:1,x:175.8,y:374.3,text:"Comencemos con\nalgo facil",font:"45px 'Kanover'",lineHeight:49.2,lineWidth:265}},{t:this.text,p:{x:173.1,y:34.4,text:"iras\ndescubriendo el\nmapa a medida que\navanzes... buena\nsuerte.",font:"45px 'Kanover'",lineHeight:49.2,lineWidth:270}}]}).to({state:[]},1).to({state:[{t:this.text_1,p:{scaleX:1.002,scaleY:0.975,x:297.9,y:90.7,text:"Sencillo\nsolo tienes que\nencontrar 5\npalabras",font:"49px 'Copperplate Gothic Bold'",lineHeight:56.55,lineWidth:595}},{t:this.text,p:{x:282.7,y:396.5,text:"Play! ",font:"64px 'Copperplate Gothic Bold'",lineHeight:73.2,lineWidth:193}}]},3).wait(1));

	// gameOver
	this.tryAgain = new lib.tryAgain();
	this.tryAgain.setTransform(184.9,400.5,1,1,0,0,0,125,79.5);
	new cjs.ButtonHelper(this.tryAgain, 0, 1, 1);

	this.instance = new lib.hangman();
	this.instance.setTransform(448.4,251.4,1,1,0,0,0,111.4,205.7);

	this.text_2 = new cjs.Text("Game\nOver", "92px 'Kanover'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 99;
	this.text_2.lineWidth = 296;
	this.text_2.setTransform(186.4,77.7);

	this.goto4 = new lib.Symbol1();
	this.goto4.setTransform(300,326,1,1,0,0,0,248,243.8);
	new cjs.ButtonHelper(this.goto4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2},{t:this.instance},{t:this.tryAgain}]},2).to({state:[{t:this.goto4}]},1).to({state:[]},1).wait(1));

	// plataform
	this.instance_1 = new lib.hangman();
	this.instance_1.setTransform(444.9,258.2,1,1,0,0,0,111.4,205.7);

	this.instance_2 = new lib.plataform();
	this.instance_2.setTransform(451.4,252.4,1,1,0,0,0,102,205.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(3));

	// hangman
	this.hang = new lib.hangman1();
	this.hang.setTransform(362.5,173.2,1,1,0,0,0,33.3,120.7);
	this.hang._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hang).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// Bitmap 1.png
	this.instance_3 = new lib.line("synched",0);
	this.instance_3.setTransform(-141.8,737.9,1,1,0,0,0,19,-29.8);

	this.instance_4 = new lib.background1();
	this.instance_4.setTransform(0,0,0.997,1.002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(139.2,300,760.9,782);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
