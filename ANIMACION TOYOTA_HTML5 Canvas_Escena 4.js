(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ANIMACION TOYOTA_HTML5 Canvas_Escena 4_atlas_", frames: [[228,578,226,219],[0,578,226,221],[0,0,1024,576]]}
];


// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["ANIMACION TOYOTA_HTML5 Canvas_Escena 4_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["ANIMACION TOYOTA_HTML5 Canvas_Escena 4_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Subite_sin_salir_de_casa_1024x576 = function() {
	this.initialize(ss["ANIMACION TOYOTA_HTML5 Canvas_Escena 4_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.izquierda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-94.4,-90.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.4,-90.2,113,109.5);


(lib.derecha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-56.4,-54.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.4,-54.8,113,110.5);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.izquierda("synched",0);
	this.instance.setTransform(-0.05,0,1,1,0,0,0,-38,-35.5);
	this.instance.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(-56.4,-54.7,113,109.5), null);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.derecha("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,0,0.4);
	this.instance.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(-56.4,-55.2,113,110.5), null);


// stage content:
(lib.ANIMACIONTOYOTA_HTML5Canvas_Escena4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//
		///* Hacer clic para ir a la escena siguiente y reproducir
		//Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta la escena siguiente en la línea de tiempo y prosigue la reproducción en dicha escena.
		//*/
		//
		//movieClip_6.addEventListener(MouseEvent.CLICK, fl_ClickToGoToNextScene);
		//
		//function fl_ClickToGoToNextScene(event:MouseEvent):void
		//{
		//	MovieClip(this.root).nextScene();
		//}
		//
		///* Hacer clic para ir al fotograma anterior y detener
		//Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma anterior y detiene la película.
		//*/
		//
		//movieClip_7.addEventListener(MouseEvent.CLICK, fl_ClickToGoToPreviousFrame);
		//
		//function fl_ClickToGoToPreviousFrame(event:MouseEvent):void
		//{
		//	prevFrame();
		//}
		//
		///* Detener en este fotograma
		//La línea de tiempo de Animate se detendrá/pausará en el fotograma en el que se inserte este código.
		//También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.movieClip_7 = new lib.Símbolo5();
	this.movieClip_7.setTransform(85.7,520.4);

	this.movieClip_6 = new lib.Símbolo4();
	this.movieClip_6.setTransform(1194.2,530.55);

	this.instance = new lib.Subite_sin_salir_de_casa_1024x576();
	this.instance.setTransform(-2,207,1.2507,0.7261);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.movieClip_6},{t:this.movieClip_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(638,567,640.7,58.200000000000045);
// library properties:
lib.properties = {
	id: '68DCAD5E69898343BE64BD9B3068A647',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ANIMACION TOYOTA_HTML5 Canvas_Escena 4_atlas_.png?1716765581734", id:"ANIMACION TOYOTA_HTML5 Canvas_Escena 4_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['68DCAD5E69898343BE64BD9B3068A647'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;