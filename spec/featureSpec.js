'use strict';

describe('Feature Test:', function(){
  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plane to land at an airport and confirm that it has landed

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
