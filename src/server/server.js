import 'babel/polyfill';
import express from 'express'
import exphbs from 'express-handlebars';
import postFixtures from './fixtures/post_fixtures';

const app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {

  let initialState = {
    visibilityFilter: 'SHOW_ALL',
    posts: postFixtures
  }

  res.render('index', {initialState: JSON.stringify(initialState)});

});

app.listen('8080');
