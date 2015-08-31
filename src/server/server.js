import 'babel/polyfill';
import express from 'express'
import exphbs from 'express-handlebars';
import postFixtures from './fixtures/post_fixtures';
import tagFixtures from './fixtures/tag_fixtures';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let posts = postFixtures;

app.post('/api/posts', (req, res) => {

  let id = posts.length + 1;
  let newPost = req.body.postParams;
  newPost.id = id;

  posts = [...posts, newPost];

  res.json(newPost);
});

app.get('/*', (req, res) => {

  let initialState = {
    visibilityFilter: 'SHOW_ALL',
    tagFilter: [],
    posts: posts,
    tags: tagFixtures
  }

  res.render('index', {initialState: JSON.stringify(initialState)});

});

app.listen('8080');
