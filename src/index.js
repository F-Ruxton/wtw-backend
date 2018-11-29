const express    = require('express');
const config     = require('./config');
const middleware = require('./middleware');
const apis       = require('./apis');

const PORT = process.env.PORT || config.CONSTANTS.PORT;
const app  = express();

middleware.install(app);
apis.register(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
