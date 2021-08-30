namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    playerCrash()
    info.player1.changeLifeBy(-1)
    placeSprites()
})
function placeSprites () {
    tiles.setTilemap(tilemap`level1`)
    Player1 = sprites.create(img`
        . . . . . . . . 
        . 4 4 4 4 4 . . 
        . 4 4 4 4 4 . . 
        . 4 4 4 4 4 . . 
        . 4 4 4 4 4 . . 
        . 4 4 4 4 4 . . 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.Player)
    Player2 = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . 3 3 3 3 3 . . 
        . 3 3 3 3 3 . . 
        . 3 3 3 3 3 . . 
        . 3 3 3 3 3 . . 
        . 3 3 3 3 3 . . 
        . . . . . . . . 
        `, SpriteKind.Player2)
    info.player1.setLife(3)
    info.player2.setLife(3)
    Player1.setBounceOnWall(true)
    Player2.setBounceOnWall(true)
    tiles.placeOnRandomTile(Player1, assets.tile`myTile`)
    tiles.placeOnRandomTile(Player2, assets.tile`myTile1`)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.tileKindAt(TileDirection.Top, assets.tile`myTile2`)) {
    	
    } else {
        Player1Direction = "Up"
    }
})
function playerCrash () {
    Player2Direction = "None"
    Player1Direction = "None"
}
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (Player2.tileKindAt(TileDirection.Bottom, assets.tile`myTile2`)) {
    	
    } else {
        Player2Direction = "Down"
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.tileKindAt(TileDirection.Left, assets.tile`myTile2`)) {
    	
    } else {
        Player1Direction = "Left"
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (Player2.tileKindAt(TileDirection.Top, assets.tile`myTile2`)) {
    	
    } else {
        Player2Direction = "Up"
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.tileKindAt(TileDirection.Right, assets.tile`myTile2`)) {
    	
    } else {
        Player1Direction = "Right"
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (Player2.tileKindAt(TileDirection.Right, assets.tile`myTile2`)) {
    	
    } else {
        Player2Direction = "Right"
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.tileKindAt(TileDirection.Bottom, assets.tile`myTile2`)) {
    	
    } else {
        Player1Direction = "Down"
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (Player2.tileKindAt(TileDirection.Left, assets.tile`myTile2`)) {
    	
    } else {
        Player2Direction = "Left"
    }
})
function setSpriteDirections () {
    Player1Direction = "None"
    Player2Direction = "None"
}
scene.onOverlapTile(SpriteKind.Player2, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile1`)
})
scene.onOverlapTile(SpriteKind.Player2, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile0`)
    playerCrash()
    info.player2.changeLifeBy(-1)
    placeSprites()
})
let Player2Direction = ""
let Player1Direction = ""
let Player2: Sprite = null
let Player1: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.centerCameraAt(96, 72)
placeSprites()
setSpriteDirections()
game.onUpdate(function () {
	
})
game.onUpdateInterval(500, function () {
    if (Player1Direction == "Left") {
        Player1.x += -16
    } else if (Player1Direction == "Right") {
        Player1.x += 16
    } else if (Player1Direction == "Up") {
        Player1.y += -16
    } else if (Player1Direction == "Down") {
        Player1.y += 16
    } else {
    	
    }
    if (Player2Direction == "Left") {
        Player2.x += -16
    } else if (Player2Direction == "Right") {
        Player2.x += 16
    } else if (Player2Direction == "Up") {
        Player2.y += -16
    } else if (Player2Direction == "Down") {
        Player2.y += 16
    } else {
    	
    }
    if (Player1.tileKindAt(TileDirection.Left, assets.tile`myTile2`) && Player1Direction == "Left") {
        Player1Direction = "Right"
    } else if (Player1.tileKindAt(TileDirection.Right, assets.tile`myTile2`) && Player1Direction == "Right") {
        Player1Direction = "Left"
    } else if (Player1.tileKindAt(TileDirection.Top, assets.tile`myTile2`) && Player1Direction == "Up") {
        Player1Direction = "Down"
    } else if (Player1.tileKindAt(TileDirection.Bottom, assets.tile`myTile2`) && Player1Direction == "Down") {
        Player1Direction = "Up"
    }
    if (Player2.tileKindAt(TileDirection.Left, assets.tile`myTile2`) && Player2Direction == "Left") {
        Player2Direction = "Right"
    } else if (Player2.tileKindAt(TileDirection.Right, assets.tile`myTile2`) && Player2Direction == "Right") {
        Player2Direction = "Left"
    } else if (Player2.tileKindAt(TileDirection.Top, assets.tile`myTile2`) && Player2Direction == "Up") {
        Player2Direction = "Down"
    } else if (Player2.tileKindAt(TileDirection.Bottom, assets.tile`myTile2`) && Player2Direction == "Down") {
        Player2Direction = "Up"
    }
})
