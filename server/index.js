const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Sparks = require('../database/Sparks.js');

const app = express();
const port = 3141;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/sparks' , function (req,res) {
  Sparks.find().limit(50).exec((err, doc) => {
    if (err) {
      console.log(`Get req /sparks encounter err: ${err}`);
      res.status(400).end();
    } else {
      res.status(200).send(doc);
    }
  })
});

app.post('/upload', function ( req, res ) {
  Sparks.create( req.body)
  .then(() => res.status(201).end())
  .catch(() => res.status(400).end())
})


app.listen(port, () => {console.log(`Server listening at http://localhost:${port}`)});