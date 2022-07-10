const express = require('express');
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');

//Routes


const app = express();

app.set('port', 5001);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');

app.engine('.hbs', engine({
    extname: '.hbs', 
    helpers: {
        dateFormat: require('handlebars-dateformat')
    }
}));

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
})

//Routers

app.get('/', (req, res) => {
    res.render('home');
});
