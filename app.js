const SS = require('./src/ss');
const url = require('./src/url');

const now = Date.parse(new Date());

new SS({ url: `${url}?_=${now}` });
