var state2 = new Kiwi.State("state2");

state2.init = function () {
    this.game.stage.width = 2400;
    this.game.stage.height = 1190;
}



state2.create = function() {
	Kiwi.State.prototype.create.call(this);

	this.background = new Kiwi.GameObjects.StaticImage(
		this, this.textures["map1"], 0, 0);
	this.character = new Kiwi.GameObjects.Sprite(
		this, this.textures["characterSprite"], 16, 291);

	this.upKey = this.game.input.keyboard.addKey(
		Kiwi.Input.Keycodes.UP );
	this.leftKey = this.game.input.keyboard.addKey(
		Kiwi.Input.Keycodes.LEFT );
	this.rightKey = this.game.input.keyboard.addKey(
		Kiwi.Input.Keycodes.RIGHT );
	this.downKey = this.game.input.keyboard.addKey(
		Kiwi.Input.Keycodes.DOWN );
	this.stateKey = this.game.input.keyboard.addKey(
		Kiwi.Input.Keycodes.ENTER );

	this.character.animation.add(
		"moveright", [ 2, 3, 4, 5, 6, 7 ], 0.1, true );
	this.character.animation.add(
		"moveleft", [ 10, 11, 12, 13, 14, 15 ], 0.1, true );
	this.character.animation.add(
		"moveup", [ 16, 17, 18, 19, 20, 21 ], 0.1, true );
	this.character.animation.add(
		"movedown", [ 22, 23, 24, 25, 26, 27 ], 0.1, true );

	this.addChild(this.background);
	this.addChild(this.character);

};

state2.update = function() {
	Kiwi.State.prototype.update.call(this);


	if( this.stateKey.isDown && this.character.transform.x >100 && this.character.transform.x<400){
		this.game.states.switchState("state1");
	}

	if( this.downKey.isDown ) {
		if( this.character.transform.y > 3) {
			this.character.y +=3
		}
			if (this.character.animation.currentAnimation.name !== "movedown") {
				this.character.animation.play( "movedown" );
		}
	}
	else if(this.upKey.isDown) {
		if ( this.character.transform.y > 3 ) {
			this.character.transform.y -= 3;
		}
		if (this.character.animation.currentAnimation.name !== "moveup") {
			this.character.animation.play( "moveup" );
		}
	}
	else if ( this.leftKey.isDown ) {

		if ( this.character.transform.x > 3 ) {
			this.character.transform.x -= 3;
		}
		if (this.character.animation.currentAnimation.name !== "moveleft") {
			this.character.animation.play( "moveleft" );
		}
	}
	else if ( this.rightKey.isDown ) {

		if ( this.character.transform.x < 5000 ) {
			this.character.transform.x += 3;
		}
		if ( this.character.animation.currentAnimation.name !== "moveright" ) {
			this.character.animation.play("moveright");
		}
	}

}