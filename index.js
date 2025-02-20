const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}));

// server.use(express.static('public'));

const posts = [
  {
    title: "The Beauty of Nature",
    banner: "https://picsum.photos/seed/picsum/800/276"
  },
  {
    title: "A Day in the City",
    banner: "https://picsum.photos/seed/city/800/276"
  },
  {
    title: "Exploring the Mountains",
    banner: "https://picsum.photos/seed/mountains/800/276"
  },
  {
    title: "Sunset by the Beach",
    banner: "https://picsum.photos/seed/beach/800/276"
  },
  {
    title: "Life in the Countryside",
    banner: "https://picsum.photos/seed/farm/800/276"
  }
];

const friends = [
  { name: 'EJ' },
  { name: 'Xandrei' },
  { name: 'Adrian' },
  // { name: 'Mark' },
  // { name: 'Jesus' },
  // { name: 'Jose' },
  // { name: 'Bob' }
]


app.get('/', async (req, res) =>
  res.render('index', {
    layout: 'main',
    title: 'Stickers page',
    posts: posts,
    friends: friends,
  })
);

app.get('/post', async (req, res) =>
  res.render('postpage', {
    layout: 'main',
    title: 'Stickers page',
    posts: posts,
    friends: friends,
  })
);

app.listen(3000, () => {
  console.log('listening on port 3000 bossman')
})
