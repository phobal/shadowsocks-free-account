const fs = require('fs');
const SS = require('./ss');
const url = require('./url');

exports.readFile = function() {
  const now = Date.parse(new Date());
  new SS({ url: `${url}?_=${now}` });
  const data = fs.readFileSync('./ss.json', 'utf-8');
  return JSON.parse(data).configs;
};

