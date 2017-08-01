var loadingState = new Kiwi.State('LoadingState');

loadingState.preload = function(){

	Kiwi.State.prototype.preload.call( this );
	
	this.addImage('map', './MIT_map.png');
	this.addImage('map1', './map.png');
	this.addSpriteSheet('characterSprite', './rocket.png', 490, 500, true);
};

loadingState.create = function(){


	Kiwi.State.prototype.create.call( this );
	// this.map = new Kiwi.GameObjects.StaticImage(this, this.textures.map, 0, 0);
	// this.addChild(this.map);
	this.game.states.switchState("state1");
};

