const fs = require('fs');
const run = require('./puppeteer');
const defaultConfig = require('./default');

module.exports = class SS {
  constructor(props) {
    this.init(props.url);
  }
  init(url) {
    run(url).then((result) => {
      this.map(result);
    });
  }
  map(data) {
    let configs = [];
    // console.log(data);
    data.map((o, index) => {
      if (parseInt(o[0], 10) === 100) {
        configs.push({
          "enable": true,
          "password": o[3],
          "method": o[4],
          "remarks": `server${index}`,
          "server": o[1],
          "obfs": "plain",
          "protocol": "origin",
          "server_port": parseInt(o[2], 10),
          "remarks_base64": "5pCs55Om5bel",
          "obfsparam": "",
          "tcp_over_udp": false,
          "udp_over_tcp": false,
          "obfs_udp": false,
          "time": o[5],
          "rate": o[0]
        });
      }
    });
    // this.save(configs);
  }
  save(configs) {
    if (fs.existsSync('./ss.json')) {
      fs.unlinkSync('./ss.json');
    }
    const data = Object.assign({}, defaultConfig, { configs });
    fs.writeFile('./ss.json', JSON.stringify(data), (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('更新成功！！');
    });
  }
};
