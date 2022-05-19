// const express = require('express');
// const cors = require('cors');
// const { application } = require('express');

// const db = require('./models');

// const PORT = process.env.PORT || 5000;
// const app = express();

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(cors());

// const apiRoutes = require('./routes/apiRoutes');
// app.use('/api',apiRoutes);

// db.sequelize.sync().then( () => {
//   app.listen(PORT, () => {
//     console.log(`Listening on: http://localhost:${PORT}`)
//   })
// })

const express = require("express");
const app = express();
const product = require("./routes/apiRoutes");

app.use(express.json({ extended: false }));

app.use("/api/users", product);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
