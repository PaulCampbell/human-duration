var pluralize = require('pluralize')

var durations = [
  { numSeconds: 60 * 60 * 24 * 7 * 52, part: 'year' },
  { numSeconds: 60 * 60 * 24 * 7, part: 'week' },
  { numSeconds: 60 * 60 * 24, part: 'day' },
  { numSeconds: 60 * 60, part: 'hour' },
  { numSeconds: 60, part: 'minute' },
  { numSeconds: 1, part: 'second' },
];

function durationPrettyPrint(numberOfSeconds) {
  var parts = durations.map((duration) => { return { quantity: amountForDuration(duration, numberOfSeconds), part: duration.part }});
  var output = parts.filter((part) => part.quantity > 0).map((dp) => { return `${dp.quantity} ${pluralize(dp.part, dp.quantity)}` }).join(', ');
  return replaceLastComma(output);
}

function amountForDuration(duration, numberOfSeconds) {
  biggerDurations = durations.filter((d) => d.numSeconds > duration.numSeconds).sort((a,b) => { return a.numSeconds - b.numSeconds });
  var numberOfDurations = Math.floor(numberOfSeconds / duration.numSeconds);
  if(biggerDurations.length > 0) {
    var largerNeighbour = biggerDurations[0];
    return numberOfDurations % (largerNeighbour.numSeconds / duration.numSeconds);
  }

  return numberOfDurations;
}

function replaceLastComma(durationString) {
  var lastCommaPosition = durationString.lastIndexOf(',');
  if(lastCommaPosition > 0) {
    durationString = durationString.substring(0, lastCommaPosition) + ' and' + durationString.substring(lastCommaPosition + 1, durationString.length);
  }
  return durationString;
}

module.exports = durationPrettyPrint;
