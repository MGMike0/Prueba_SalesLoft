const express = require('express');

const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type');
    next();
});


const peopleRoutes = require('./routes/peopleRoutes');

peopleRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT)