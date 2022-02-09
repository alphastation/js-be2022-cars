const express = require('express');
const hbs = require('express-handlebars');
const carMidService = require('./services/carService');

const { home } = require('./controllers/home');
const { about } = require('./controllers/about');
const { details } = require('./controllers/details');
const { notFound } = require('./controllers/notFound');

const create = require('./controllers/create');
const deleteItem = require('./controllers/delete');
const edit = require('./controllers/edit');



const app = express();








app.engine('hbs', hbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
    // layoutsDir: __dirname + 'views/layouts'
}).engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));
app.use(carMidService());



app.get('/', home);
app.get('/about', about);
app.get('/details/:id', details);



app.route('/create')
    .get(create.get)
    .post(create.post);

app.route('/delete/:id')
    .get(deleteItem.get)
    .post(deleteItem.post);

app.route('/edit/:id')
    .get(edit.get)
    .post(edit.post);


app.all('*', notFound);//na posledno myasto

app.listen(3000, () => console.log('Server started on port 3000!!!'))