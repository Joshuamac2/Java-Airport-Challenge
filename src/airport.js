'use strict';

class Airport {

  constructor() {
    this._storage = []
  }

  planes() {
    return this._storage;
  }

  landing(plane) {
    this._storage.push(plane);
  };
};
