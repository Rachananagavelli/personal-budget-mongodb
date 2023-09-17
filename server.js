const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.use('/',express.static('public'));

app.get('/hello',(req,res) => {
    res.send('Hello World!');
});

app.get('/budget',(req,res) => {
    fs.readFile('budget.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error reading JSON file');
        } else {
          res.json(JSON.parse(data));
        }
      });
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
})