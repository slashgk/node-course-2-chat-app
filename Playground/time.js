// Jan 1st 1970 00:00:00 am
 var moment = require('moment');

//  var date = moment();
//  console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
 