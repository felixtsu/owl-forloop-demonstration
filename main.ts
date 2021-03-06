scene.setTileMapLevel(tilemap`级别1`)
scene.onHitWall(SpriteKind.Food, function(sprite: Sprite, location: tiles.Location) {
    for (let col = 0; col < 8; col++) {
        tiles.setWallAt(tiles.getTileLocation(col, location.row - 1), true)
    }
})

let deltaY = 8
function createApples(no:number) {
    let deltaX = 10
    for (let i = 0; i< no; i++) {
        let apple = sprites.create(img`
            . . . . . . . e c 7 . . . . . .
            . . . . e e e c 7 7 e e . . . .
            . . c e e e e c 7 e 2 2 e e . .
            . c e e e e e c 6 e e 2 2 2 e .
            . c e e e 2 e c c 2 4 5 4 2 e .
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
            . e e e 2 2 2 2 2 2 2 2 2 4 e .
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
            . . 2 e e 2 2 2 2 2 4 4 2 e . .
            . . . 2 2 e e 4 4 4 2 e e . . .
            . . . . . 2 2 e e e e . . . . .
        `, SpriteKind.Food)
        apple.y = 8
        apple.x = deltaX
        apple.vy = 50
        deltaX += 16
    }
    // deltaY += 16
}


for (let 多少个苹果 = 1; 多少个苹果< 10; 多少个苹果 = 多少个苹果 + 1) {
    createApples(多少个苹果)
    pause(1000)
}