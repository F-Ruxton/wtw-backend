const express    = require('express');
const config     = require('./config');
const middleware = require('./middleware');
const apis       = require('./apis');

const PORT = config.PORT;
const app  = express();

middleware.install(app);
apis.register(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
