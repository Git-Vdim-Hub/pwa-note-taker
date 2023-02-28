//PSEUDO CODE
/*
1. Get app running 
    a. add scripts, run npm install, reference mini proj
    b. re-read chal readMe/figure out whats needed  */



const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
