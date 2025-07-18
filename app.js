const express = require('express')
const app = express()
const port = 80
const Example = require('@wkl-training/ascpc-npm-example');

const example = new Example();

process.env.SECRET_KEY = '1234321';
process.env.DB_USER = 'words';
process.env.DB_PASSWORD = 'morewords';

app.get('/', (req, res) => {
  res.send(example.sayHello())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

