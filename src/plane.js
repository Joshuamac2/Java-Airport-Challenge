'use strict'

class Plane {

  constructor() {
    this._plane;
  }

  land(atAirport) {
    atAirport.landing(this);
  };
};
