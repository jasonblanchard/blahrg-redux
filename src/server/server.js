import 'babel/polyfill';
import express from 'express'
import exphbs from 'express-handlebars';

const app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {
  res.render('index');
});

app.listen('8080');
