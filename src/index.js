const express = require('express');
const BodyParser = require('body-parser');

const app = express();


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false}));

require('./controllers/authController')(app);
require('./controllers/registroController')(app);

app.listen(3000);