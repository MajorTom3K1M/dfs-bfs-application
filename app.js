const express = require('express');
const path = require('path');
const index = require('./routes/index');

let handlebars = require('express-handlebars');

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views', 'themes')));
app.use(express.static(path.join(__dirname, 'views', 'layouts')));

app.engine('hbs', handlebars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'layout.hbs',
    partialsDir: [path.join(__dirname, 'views')]
}));

app.set('view engine', 'hbs');

app.use('/', index)

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),() => {
    console.log(`Server run on port ${app.get('port')}`);
});
