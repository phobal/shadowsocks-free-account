const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});
app.get('/download', (req, res) => {
    const path = __dirname + '/ss.json';
    res.download(path, 'ss.json');
});

app.listen(3000, ()=> {
    console.log('服务启动！');
})