'use strict';

describe('Service: songService', function () {

  // load the service's module
  beforeEach(module('frontApp'));

  // instantiate service
  var songService;
  beforeEach(inject(function (_songService_) {
    songService = _songService_;
  }));

  it('should do something', function () {
    expect(!!songService).toBe(true);
  });

});
