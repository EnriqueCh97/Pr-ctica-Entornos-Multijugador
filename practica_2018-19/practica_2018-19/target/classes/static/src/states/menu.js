Spacewar.menuState = function(game) {

}

Spacewar.menuState.prototype = {

	init : function() {
		if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **MENU** state");
		}
	},

	preload : function() {
		// In case JOIN message from server failed, we force it
		if (typeof game.global.myPlayer.id == 'undefined') {
			if (game.global.DEBUG_MODE) {
				console.log("[DEBUG] Forcing joining server...");
			}
			let message = {
				event : 'JOIN'
			}
			game.global.socket.send(JSON.stringify(message))
		}
		
		var person = prompt("Please enter your name", "Harry Potter");
		
		if (typeof game.global.myPlayer.id != 'undefined') {
			if (game.global.DEBUG_MODE) {
				console.log("[DEBUG] Forcing joining server...");
			}
			let message = {
				event : 'NAME',
				name : person
			}
			game.global.socket.send(JSON.stringify(message))
		}
	},

	create : function() {
		
	},

	update : function() {
		if (typeof game.global.myPlayer.id !== 'undefined') {
			game.state.start('lobbyState')
		}
	}
}