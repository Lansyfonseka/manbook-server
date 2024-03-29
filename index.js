const express = require('express');
const cors = require('cors');
// const { application } = require('express');

const db = require('./models');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

const apiRoutes = require('./api/apiRouter');
app.use('/api',apiRoutes);

db.sequelize.sync().then( () => {
  app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`)
  })
})