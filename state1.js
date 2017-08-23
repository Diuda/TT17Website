var state1 = new Kiwi.State("state1");


state1.init = function() {
    this.game.stage.width = 4689;
    this.game.stage.height = 5000;
}


state1.create = function() {
    Kiwi.State.prototype.create.call(this);
    

    this.background = new Kiwi.GameObjects.StaticImage(
        this, this.textures["map"], 0, 0);
    this.character = new Kiwi.GameObjects.Sprite(
        this, this.textures["characterSprite"], 16, 291);
    this.centerPoint = new Kiwi.Geom.Point( this.character.x, this.character.y );

    this.upKey = this.game.input.keyboard.addKey(
        Kiwi.Input.Keycodes.UP);
    this.leftKey = this.game.input.keyboard.addKey(
        Kiwi.Input.Keycodes.LEFT);
    this.rightKey = this.game.input.keyboard.addKey(
        Kiwi.Input.Keycodes.RIGHT);
    this.downKey = this.game.input.keyboard.addKey(
        Kiwi.Input.Keycodes.DOWN);
    this.stateKey = this.game.input.keyboard.addKey(
        Kiwi.Input.Keycodes.ENTER);

    this.addChild(this.background);
    this.addChild(this.character);
    this.character.scaleX = 0.5;
    this.character.scaleY = 0.5;
    this.character.speed = 20;


};


state1.update = function() {
    Kiwi.State.prototype.update.call(this);
    // var a = this.findAngle();
    // console.log(this.character.rotation)


    if (this.stateKey.isDown && this.character.transform.x > 100 && this.character.transform.x < 400) {
        this.game.states.switchState("state2");
    }


    if (this.downKey.isDown) {

            
        if(this.character.rotation>0){
            this.character.x += Math.cos(this.character.rotation)*3;
            this.character.y += Math.sin(this.character.rotation)*3;
        }
        else if(this.character.rotation<0){
        	this.character.x += Math.cos(this.character.rotation)*3;
        	this.character.y += Math.sin(this.character.rotation)*3;
        }


    } else if (this.upKey.isDown) {

        	// this.character.y -=3;
        // console.log(Math.sin(this.character.rotation));
        // console.log(Math.cos(this.character.rotation));	
        if(Math.cos(this.character.rotation)==1){
        	this.character.y -= Math.cos(this.character.rotation)*3;
        	// this.character.x += Math.sin(this.character.rotation)*3;
        }
        else if(Math.cos(this.character.rotation)==-1){
        	// console.log('working');
        	this.character.y -= Math.cos(this.character.rotation)*3;
        	// this.character.x += Math.sin(this.character.rotation)*3;
        }
        else if(Math.sin(this.character.rotation)==1){
        	this.character.x += Math.sin(this.character.rotation)*3;
        }
        else if(Math.sin(this.character.rotation)==-1){
        	this.character.x += Math.sin(this.character.rotation)*3;
        }

        else{

        if(Math.sin(this.character.rotation)>0 && Math.cos(this.character.rotation)>0){
            // this.character.x += Math.cos(this.character.rotation)*3;
            this.character.y -= Math.sin(this.character.rotation)*3;
            this.character.x +=Math.sin(this.character.rotation)*3;
        }
        if(Math.sin(this.character.rotation)<0 && Math.cos(this.character.rotation)>0){
        	this.character.x -= Math.cos(this.character.rotation)*3;
        	this.character.y += Math.sin(this.character.rotation)*3;	
        } 
        if(Math.cos(this.character.rotation)<0 && Math.sin(this.character.rotation)>0){
        	// console.log(Math.sin(this.character.rotation)*3);
        	this.character.x -= Math.cos(this.character.rotation)*3;
        	this.character.y +=Math.sin(this.character.rotation)*3;
        	// console.log("working!!");
        	   // this.character.y +=3;
        }
        if(Math.cos(this.character.rotation)<0 && Math.sin(this.character.rotation)<0){
        	this.character.x += Math.cos(this.character.rotation)*3;
        	this.character.y -=Math.sin(this.character.rotation)*3;
        }
    }

            // this.character.y -= Math.sin(this.findAngle())*this.speed;
            // this.character.x -= Math.cos(this.findAngle())*this.speed;
        // }

    } else if (this.leftKey.isDown) {

        this.character.rotation -= Math.PI / 60;
    } else if (this.rightKey.isDown) {
        this.character.rotation += Math.PI / 60;
    }

};

state1.findAngle = function() {
	// var cord = new Kiwi.Geom.Point(this.character.x, this.character.y);
	// console.log(this.mousePoint);
	// console.log(cord.x)
	return this.centerPoint.angleToXY(this.character.x+(this.character.width/(2*screen.width)), this.character.y+(this.character.height/(2*screen.height)));
	
}