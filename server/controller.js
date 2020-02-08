const express = require('express');
const app = express();
const { readFile } = require('../src/file');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.set("view options", { layout: true });

app.use(express.static(__dirname + '/docs'));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/data', (req, res) => {
    res.send(readFile());
});
app.get('/download', (req, res) => {
    const path = __dirname + '/ss.json';
    res.download(path, 'ss.json');
});

app.listen(3000, ()=> {
    console.log('服务启动！');
});