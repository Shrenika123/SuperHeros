const express = require('express');
const cors = require('cors')
const auth = require('./helper/auth')

const app = express();
const port = process.env.PORT || 7000
app.use(cors())

app.get('/superheros/:superheroId', auth, (req, res) => {
  return res.send(req.val);
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);