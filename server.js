const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const data = require("./budget.json");

app.use('/',express.static('public'));

const budget = {
    myBudget:[
    {
        title: 'Eat Out',
        budget: 25
    },
    {
        title: 'Rent',
        budget: 375
    },
    {
        title: 'Grocery',
        budget: 110
    },
    {
        title: 'Insurance',
        budget: 40
    },
    {
        title: 'Utilities',
        budget: 50
    },
    {
        title: 'Transport',
        budget: 30
    },
    {
        title: 'Savings',
        budget: 150
    },

]
};

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