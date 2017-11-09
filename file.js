const fs = require('fs');
const SS = require('./ss');

exports.readFile = function() {
  const now = Date.parse(new Date());
  new SS({ url: `https://ss.weirch.com/ss.php?_=${now}` });
  const data = fs.readFileSync('./ss.json', 'utf-8');
  return JSON.parse(data).configs;
};

