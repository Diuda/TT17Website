var loadingState = new Kiwi.State('LoadingState');

loadingState.preload = function(){

	Kiwi.State.prototype.preload.call( this );
	this.addImage('map', './MIT_map.png', 0, 0, true);
	this.addSpriteSheet('characterSprite', './rocket.png', 490, 500, true);
};

loadingState.create = function(){


	Kiwi.State.prototype.create.call( this );
	this.map = new Kiwi.GameObjects.Sprite(this, this.textures.map, 0, 0);
	this.addChild(this.map);
	this.game.states.switchState("state1");
};

// var gameOptions = {
// 	renderer: Kiwi.RENDERER_CANVAS,
// 	width: 3263,
// 	height: 4867	
// };

// var game = new Kiwi.Game('game-container', 'LoadingAnImage', state, gameOptions);
