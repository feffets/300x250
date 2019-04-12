(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.asset_background_980x250 = function() {
	this.initialize(img.asset_background_980x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.asset_cover_980x250 = function() {
	this.initialize(img.asset_cover_980x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,548);// helper functions:

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


(lib.mc_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager_1
	this.instance = new lib.asset_background_980x250();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_background, new cjs.Rectangle(0,0,300,250), null);


(lib.cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager_1
	this.instance = new lib.asset_cover_980x250();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.5,0.5,0.021);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.1,274.1);


(lib.clickTag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("EhMjATiMAAAgnDMCZHAAAMAAAAnDg");
	this.shape.setTransform(490,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,980,250);


(lib.button_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHA6QgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAFgDADQgDADgFAAQgEAAgDgDgAgIAgIAAhcIAQAAIAABcg");
	this.shape.setTransform(86.9,9.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARA8IghgxIgEAAIAAAxIgSAAIAAh3IAVAAQAVAAAKAHQAHAFAEAHQADAIAAAIQAAAMgHAKQgHAIgMADIAlAzgAgUgEIAGAAQAZAAAAgTQAAgTgYAAIgHAAg");
	this.shape_1.setTransform(80.025,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnBNIgNgdIgyAAIgOAdIgTAAIA6h/IA5B/gAATAfIgSgpIgSApIAkAAgAAJg4QgDgEAAgFQAAgEADgEQADgCAFAAQAFAAADACQADAEAAAEQAAAFgDAEQgDACgFAAQgFAAgDgCgAgVg4QgDgEAAgFQAAgEADgEQADgCAFAAQAEAAADACQAEAEAAAEQAAAFgEAEQgDACgEAAQgFAAgDgCg");
	this.shape_2.setTransform(68.825,7.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZA8IAAg4IgyAAIAAA4IgSAAIAAh3IASAAIAAAvIAyAAIAAgvIATAAIAAB3g");
	this.shape_3.setTransform(57.15,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA8IAAh3IAYAAQATAAAKAIQAOAKAAASQAAARgNAJQgLAIgQAAIgJAAIAAAxgAgPgEIAHAAQAYAAAAgUQAAgSgYAAIgHAAg");
	this.shape_4.setTransform(43.05,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA8QgTgSAAgaQAAgZATgTQASgSAZAAQAaAAASASQATATAAAYQAAAagTASQgSATgaAAQgZAAgSgSgAgfgQQgNAOAAASQAAATANANQAOAMARAAQASAAANgNQANgNAAgTQAAgSgMgNQgNgNgTAAQgSAAgNANgAAIg6QgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDADgFAAQgEAAgDgDgAgXg6QgDgDAAgFQAAgEADgEQADgDAFAAQAFAAADADQADAEAAAEQAAAFgDADQgDADgFAAQgFAAgDgDg");
	this.shape_5.setTransform(31.175,7.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVA8Igrg2IgDAFIAAAxIgSAAIAAh3IASAAIAAAwIAtgwIAZAAIg2A3IA2BAg");
	this.shape_6.setTransform(19.45,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.button_txt, new cjs.Rectangle(0,0,103.1,21.2), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.button_txt();
	this.instance.parent = this;
	this.instance.setTransform(70.2,23.6,1,1,0,0,0,66,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A3F46").s().p("AoTC+QgcAAAAgdIAAlBQAAgdAcAAIQnAAQAcAAAAAdIAAFBQAAAdgcAAg");
	this.shape.setTransform(56,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(0,0,112,38), null);


(lib.anim_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager_1
	this.instance = new lib.mc_background();
	this.instance.parent = this;
	this.instance.setTransform(490,125,1,1,0,0,0,490,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:489.4,regY:124.2,scaleX:1.0426,scaleY:1.0385,skewX:1.2713,skewY:0.3061,x:504.35,y:125.9},59,cjs.Ease.quadInOut).to({regX:490,regY:125,scaleX:1,scaleY:1,skewX:0,skewY:0,x:490,y:125},60,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-6.1,319,261.8);


// stage content:
(lib.elle_travel_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ClickTag
	this.instance = new lib.clickTag();
	this.instance.parent = this;
	this.instance.setTransform(150,125,0.3061,1,0,0,0,490,125);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// CTA
	this.instance_1 = new lib.button();
	this.instance_1.parent = this;
	this.instance_1.setTransform(241,217,1,1,0,0,0,80,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	// Cover
	this.instance_2 = new lib.cover();
	this.instance_2.parent = this;
	this.instance_2.setTransform(198.8,203.4,1,1,0,0,0,153.8,185.4);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.298)",0,0,11);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Background
	this.instance_3 = new lib.anim_background();
	this.instance_3.parent = this;
	this.instance_3.setTransform(490,125,1,1,0,0,0,490,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,150,183);
// library properties:
lib.properties = {
	id: '2CF9AB771A7049148EE94591CAE19715',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/asset_background_980x250.jpg", id:"asset_background_980x250"},
		{src:"images/asset_cover_980x250.jpg", id:"asset_cover_980x250"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['2CF9AB771A7049148EE94591CAE19715'] = {
	getStage: function() { return exportRoot.getStage(); },
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