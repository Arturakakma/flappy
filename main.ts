namespace SpriteKind {
    export const coins = SpriteKind.create()
    export const end = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.coins, function (sprite, otherSprite) {
    score += 1
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    game.gameOver(true)
})
let score = 0
scene.setBackgroundColor(10)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . b b b . . 
    . b b b b b b . . . b b 7 b b b 
    b b 7 7 7 7 b . . . b 7 7 7 7 b 
    b 7 7 7 7 7 b . . . b 7 1 7 7 b 
    b 7 7 7 1 7 b b b b b 7 6 7 7 b 
    b 7 7 7 6 7 b f f f f 7 7 7 7 b 
    b 7 7 7 7 7 f f f f f 7 7 7 7 b 
    b 7 7 7 7 7 f f f f f f f f f b 
    . b f f f f f 7 f 7 7 f f f f b 
    . b f f f f f f 7 7 f f f f f b 
    b f f f f f f 7 7 f 7 f f f f b 
    b f f f f f f f f f f f f f f b 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
