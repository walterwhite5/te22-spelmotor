import GameObject from "./GameObject"

export default class Obstacle extends GameObject {
  constructor(game, x, y, width, height) {
    super(game, x, y, width, height)

    this.color = "green"
    this.markForDeletion = false
  }

  update(deltaTime) {
    this.x -= this.game.speed
    if (this.x + this.width < 0) {
      this.markForDeletion = true
    }
  }
}