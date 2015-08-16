

var cheerio = require('cheerio');
var http = require('http')  

var $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$.html();


var options = {
  host: 'www.crunchbase.com',
  //host: 'www.google.co.il'
  port: 80,
  path: '/organization/datafox',
  //path: '/?gfe_rd=cr&amp;ei=PHXQVZDOJ4He8gf-yIv4AQ',
  method: 'GET'
};

// var options = {
//   host: 'www.google.com',
//   port: 80,
//   path: '/upload',
//   method: 'POST'
// };

var req = http.request(options, function(res) {
  // console.log('STATUS: ' + res.statusCode);
  // console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log(chunk);
  });
  
  // console.log('-------------');
  
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// // write data to request body
// req.write('data\n');
// req.write('data\n');
req.end();