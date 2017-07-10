var state = new Kiwi.State('Play');

state.preload = function(){
	this.addImage('map', './MIT_map.png');
};

state.create = function(){

	this.map = new Kiwi.GameObjects.Sprite(this, this.textures.map, 0, 0);
	this.addChild(this.map);
};

var gameOptions = {
	renderer: Kiwi.RENDERER_CANVAS,
	width: 3263,
	height: 4867
};

var game = new Kiwi.Game('game-container', 'LoadingAnImage', state, gameOptions);
