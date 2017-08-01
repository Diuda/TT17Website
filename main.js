var myGame = new Kiwi.Game( null, null, null, { renderer: Kiwi.RENDERER_CANVAS, width: 3263, height: 4867 } );

myGame.states.addState( loadingState );
myGame.states.addState( state2 );
myGame.states.addState( state1 );

// myGame.states.addState( outsideState );

myGame.states.switchState( "LoadingState" );