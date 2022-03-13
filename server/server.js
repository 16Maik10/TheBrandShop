const express = require('express');
const fs = require('fs');
const app = express();
const cart = require('./cartRouter');//обработчик всех запросов корзины

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', cart);




app.get('/api/productCatalog', (req, res) => {
    fs.readFile('server/db/productCatalog.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});

app.get('/api/womenTopics', (req, res) => {
    fs.readFile('server/db/womenTopics.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});

app.get('/api/menTopics', (req, res) => {
    fs.readFile('server/db/womenTopics.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));