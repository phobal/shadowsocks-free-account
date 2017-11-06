const superagent = require('superagent');
const fs = require('fs');
const defaultConfig = require('./default');

class SS {
  constructor(props) {
    this.init(props.url);
  }
  init(url) {
    superagent
      .get(url)
      .then((res) => {
        const text = res.text;
        const result = JSON.parse(text).data;
        this.map(result);
      })
      .catch(err => {
        console.log(err);
      })
  }
  map(data) {
    let configs = [];
    data.map((o, index) => {
      if (o[0] === 100) {
        configs.push({
          "enable": true,
          "password": o[3],
          "method": o[4],
          "remarks": `server${index}`,
          "server": o[1],
          "obfs": "plain",
          "protocol": "origin",
          "server_port": parseInt(o[2]),
          "remarks_base64": "5pCs55Om5bel",
          "obfsparam": "",
          "tcp_over_udp": false,
          "udp_over_tcp": false,
          "obfs_udp": false
        });
      }
    });
    this.save(configs);
  }
  save(configs) {
    fs.unlinkSync('./ss.json');
    const data = Object.assign({}, defaultConfig, { configs });
    fs.writeFile('./ss.json', JSON.stringify(data), (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

const now = Date.parse(new Date());
const ss = new SS({ url: `https://ss.weirch.com/ss.php?_=${now}` });
