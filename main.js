var myGame = new Kiwi.Game( null, null, null, { renderer: Kiwi.RENDERER_CANVAS } );

myGame.states.addState( loadingState );
myGame.states.addState( state1 );
// myGame.states.addState( outsideState );

myGame.states.switchState( "LoadingState" );