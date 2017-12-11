const SS = require('./ss');
const url = require('./url');

const now = Date.parse(new Date());

new SS({ url: `${url}?_=${now}` });
