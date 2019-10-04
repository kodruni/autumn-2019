class Pacman {
  constructor(stage, name, gender, skinTone, xpos, ypos) {
    this.stage = stage;
    this.name = name;
    this.gender = gender;
    this.skinTone = skinTone;
    this.xpos = xpos;
    this.ypos = ypos;
    this.mouth = 'open';
    this.facing = 'right';
    this.score = 0;
    this.alive = true;
  }

  move(dir) {
    if (!this.alive) {
      return;
    }

    if (this.mouth === 'open') {
      this.mouth = 'close';
    } else {
      this.mouth = 'open';
    }

    this.facing = dir;

    let newX = this.xpos;
    let newY = this.ypos;

    switch (dir) {
      case 'right':
        newX += 1;
        break;
      case 'left':
        newX -= 1;
        break;
      case 'up':
        newY -= 1;
        break;
      case 'down':
        newY += 1;
        break;
      default:
        break;
    }

    if (this.stage.withinBorders(newX, newY)) {
      const collisionEntity = this.stage.detectCollision(newX, newY);

      if (collisionEntity === null) {
        this.xpos = newX;
        this.ypos = newY;
      } else if (collisionEntity.type === ENTITY_APPLE) {
        this.xpos = newX;
        this.ypos = newY;
        this.score++;
        this.stage.removeEntity(collisionEntity);
      } else if (collisionEntity.type === ENTITY_BOMB) {
        this.xpos = newX;
        this.ypos = newY;
        this.alive = Math.random() < 0.5;
        this.stage.removeEntity(collisionEntity);
      }
    }

    this.update();
  }

  render() {
    this.element = document.createElement('div');
    return this.element;
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }

  update() {
    this.element.style.left = `${this.xpos * TILE_SIZE}px`;
    this.element.style.top = `${this.ypos * TILE_SIZE}px`;

    if (this.alive) {
      this.element.className = (
        `entity entity--pac pac${this.gender}-active-${this.skinTone}`
      );
      this.element.textContent = `${this.name}: ${this.score}`;

      if (this.mouth === 'open') {
        this.element.style.backgroundPositionX = '0px';
      } else {
        this.element.style.backgroundPositionX = `${TILE_SIZE}px`;
      }

      if (this.facing === 'right') {
        this.element.style.backgroundPositionY = '0px';
      } else if (this.facing === 'left') {
        this.element.style.backgroundPositionY = `${-TILE_SIZE}px`;
      } else if (this.facing === 'down') {
        this.element.style.backgroundPositionY = `${-2 * TILE_SIZE}px`;
      } else if (this.facing === 'up') {
        this.element.style.backgroundPositionY = `${-3 * TILE_SIZE}px`;
      }
    } else {
      this.element.className = 'entity entity--tomb';
      this.element.textContent = '';
    }
  }
}
