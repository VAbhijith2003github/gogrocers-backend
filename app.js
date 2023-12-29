const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
