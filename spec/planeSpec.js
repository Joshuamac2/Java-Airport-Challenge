'use strict';

describe('Plane',function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['landing']);
  });
  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.landing).toHaveBeenCalledWith(plane);
  });
});
