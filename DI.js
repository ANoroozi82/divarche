'use strict';

class DIContainer {
  constructor() {
    this.dependencies = {};
  }

  register(key, Constructor) {
    this.dependencies[key] = Constructor;
  }

  get(key) {
    if (!this.dependencies[key]) {
      throw new Error(`No dependency found for key: ${key}`);
    }
    return this.dependencies[key];
  }
}

module.exports = DIContainer;
