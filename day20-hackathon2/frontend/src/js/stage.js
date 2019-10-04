class Stage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.entities = [];
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'stage';
    this.element.style.width = `${this.width * TILE_SIZE}px`;
    this.element.style.height = `${this.height * TILE_SIZE}px`;
    return this.element;
  }

  mount(parent) {
    parent.appendChild(this.render());

    fetch(`http://bootcamp.podlomar.org/api/pacman?width=${this.width}&height=${this.height}`)
      .then((resp) => resp.json())
      .then((pacmanMap) => {
        for (const wall of pacmanMap.walls) {
          const entity = new Entity(wall.x, wall.y, ENTITY_WALL);
          entity.mount(this.element);
          this.entities.push(entity);
        }

        for (const apple of pacmanMap.apples) {
          const entity = new Entity(apple.x, apple.y, ENTITY_APPLE);
          entity.mount(this.element);
          this.entities.push(entity);
        }

        for (const bomb of pacmanMap.bombs) {
          const entity = new Entity(bomb.x, bomb.y, ENTITY_BOMB);
          entity.mount(this.element);
          this.entities.push(entity);
        }
      });
  }

  removeEntity(entity) {
    const idx = this.entities.indexOf(entity);
    if (idx > -1) {
      this.entities.splice(idx, 1);
      entity.unmount();
    }
  }

  withinBorders(x, y) {
    if (x >= this.width || y >= this.height) {
      return false;
    }

    if (x < 0 || y < 0) {
      return false;
    }

    return true;
  }

  detectCollision(x, y) {
    for (const entity of this.entities) {
      if (entity.xpos === x && entity.ypos === y) {
        return entity;
      }
    }

    return null;
  }
}
