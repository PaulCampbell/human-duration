var durationPrettyPrint = require('./durationPrettyPrint.js');
var expect = require('chai').expect;

describe('durationPrettyPrint', function() {
  it('should break the duration down into seconds', function () {
    expect(durationPrettyPrint('55')).to.eql('55 seconds')
  });

  it('should break the duration down into minutes', function () {
    expect(durationPrettyPrint(120)).to.eql('2 minutes')
  });

  it('should combine minutes and seconds', function () {
    expect(durationPrettyPrint(124)).to.eql('2 minutes and 4 seconds')
  });

  it('should break the duration down into hours', function () {
    expect(durationPrettyPrint(3600)).to.eql('1 hour')
  });

  it('should combine hours, minutes and seconds', function() {
    expect(durationPrettyPrint(3724)).to.eql('1 hour, 2 minutes and 4 seconds')
  });

  it('should combine days and hours', function () {
    expect(durationPrettyPrint(60 * 60 * 25)).to.eql('1 day and 1 hour')
  });

  it('should break the duration down into weeks', function () {
    expect(durationPrettyPrint(60 * 60 * 24 * 7)).to.eql('1 week')
  });

  it('should combine weeks and minutes', function () {
    expect(durationPrettyPrint((60 * 60 * 24 * 7) + 60)).to.eql('1 week and 1 minute')
  });

  it('should combine weeks, days and minutes', function () {
    expect(durationPrettyPrint((60 * 60 * 24 * 7 * 2) + (60 * 60  * 24 * 3) + 60)).to.eql('2 weeks, 3 days and 1 minute')
  });

  it('should do years too', function () {
    expect(durationPrettyPrint((60 * 60 * 24 * 7 * 52) + (60 * 60  * 24 * 3) + 60)).to.eql('1 year, 3 days and 1 minute')
  });

  it('acceptance', function() {
    expect(durationPrettyPrint(77777777)).to.eql('2 years, 24 weeks, 2 days, 4 hours, 56 minutes and 17 seconds');
    // blurgh. How many days in a year???
  });
});

