const SS = require('./ss');

const now = Date.parse(new Date());

new SS({ url: `https://ss.weirch.com/ss.php?_=${now}` });
