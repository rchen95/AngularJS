'use strict';

describe('E2E: Testing Index page', function () {

  var ptor;

  beforeEach(function () {
    //ptor = protractor.getInstance();
    browser.get('/index.html');
  });

  it('should do something', function () {
    var awesomeThings = element.all(by.repeater('thing in awesomeThings'));

    expect(awesomeThings.count()).toBe(5);

    var thing0 = element(by.repeater('thing in awesomeThings').row(0).column('name'));
    expect(thing0.getText()).toBe('HTML5 Boilerplate');
  });

});