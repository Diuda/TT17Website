var state1 = new Kiwi.State( "state1" );

state1.create = function() {
	Kiwi.State.prototype.create.call( this );
	this.character = new Kiwi.GameObjects.Sprite(
		this, this.textures[ "characterSprite" ], 16, 291 );

	this.upKey = this.game.input.keyboard.addKey(
		Kiwi.Input.Keycodes.UP );
	this.leftKey = this.game.input.keyboard.addKey(
		Kiwi.Input.Keycodes.LEFT );
	this.rightKey = this.game.input.keyboard.addKey(
		Kiwi.Input.Keycodes.RIGHT );
	this.downKey = this.game.input.keyboard.addKey(
		Kiwi.Input.Keycodes.DOWN );

	this.character.animation.add(
		"idleright", [ 0 ], 0.1, false );
	this.character.animation.add(
		"crouchright", [ 1 ], 0.1, false );
	this.character.animation.add(
		"moveright", [ 2, 3, 4, 5, 6, 7 ], 0.1, true );
	this.character.animation.add(
		"idleleft", [ 8 ], 0.1, false );
	this.character.animation.add(
		"crouchleft", [ 9 ], 0.1, false );
	this.character.animation.add(
		"moveleft", [ 10, 11, 12, 13, 14, 15 ], 0.1, true );
	this.character.animation.add(
		"moveup", [ 16, 17, 18, 19, 20, 21 ], 0.1, true );
	this.character.animation.add(
		"movedown", [ 22, 23, 24, 25, 26, 27 ], 0.1, true );

	this.facing = "right";

	this.character.animation.play( "idleright" );

	this.addChild( this.character );
};


state1.update = function() {
	Kiwi.State.prototype.update.call( this );

	// if ( this.stateKey.isDown && this.character.transform.x < 60 ) {

	// 	// this.game.states.switchState( "OutsideState" );
	// }

	if ( this.downKey.isDown ) {
		if ( this.character.transform.y > 3 ) {
			this.character.transform.y += 3;
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

		this.facing = "left";
		if ( this.character.transform.x > 3 ) {
			this.character.transform.x -= 3;
		}
		if (this.character.animation.currentAnimation.name !== "moveleft") {
			this.character.animation.play( "moveleft" );
		}
	}
	else if ( this.rightKey.isDown ) {

		this.facing = "right";
		if ( this.character.transform.x < 600 ) {
			this.character.transform.x += 3;
		}
		if ( this.character.animation.currentAnimation.name !== "moveright" ) {
			this.character.animation.play("moveright");
		}
	}
	else {
		if ( this.character.animation.currentAnimation.name !==
				"idle" + this.facing ) {
			this.character.animation.play( "idle" + this.facing );
		}
	}
};