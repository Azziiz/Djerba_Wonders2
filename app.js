const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Beach = require('./models/beach');
const Culture = require('./models/culture');
const History = require('./models/history');
const Place = require('./models/place');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://aziz_belhaj:aziz1234@cluster0.hd7xfc4.mongodb.net/djerba?retryWrites=true&w=majority";


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/home');
});



// blog routes
app.get('/home/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/home', (req, res) => {
  Place.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { results: result, title: 'Home' });
    })
    .catch(err => {
      console.log(err);
    });
});



app.get('/home/:id', (req, res) => {
  const id = req.params.id;
  Place.findById(id)
    .then(result => {
      res.render('details', { results: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
    });
});


//beaches section 
app.get('/beaches', (req, res) => {
  Beach.find().sort({ createdAt: -1 })
  .then(result => {
    res.render('beaches', { results: result, title: 'Djerba Beaches' });
  })
  .catch(err => {
    console.log(err);
  });
});

app.get('/beaches/:id', (req, res) => {
  const id = req.params.id;
  Beach.findById(id)
    .then(result => {
      res.render('details', { results: result, title: 'beach' });
    })
    .catch(err => {
      console.log(err);
    });
});



 // history section
app.get('/history', (req, res) => {
  History.find().sort({ createdAt: -1 })
  .then(result => {
    res.render('history', { results: result, title: 'Djerba history' });
  })
  .catch(err => {
    console.log(err);
  });
});

app.get('/history/:id', (req, res) => {
  const id = req.params.id;
  History.findById(id)
    .then(result => {
      res.render('details', { results: result, title: 'history' });
    })
    .catch(err => {
      console.log(err);
    });
});



//culture section
app.get('/culture', (req, res) => {
  Culture.find().sort({ createdAt: -1 })
  .then(result => {
    res.render('culture', { results: result, title: 'Djerba culture' });
  })
  .catch(err => {
    console.log(err);
  });
});

app.get('/culture/:id', (req, res) => {
  const id = req.params.id;
  Culture.findById(id)
    .then(result => {
      res.render('details', { results: result, title: 'culture' });
    })
    .catch(err => {
      console.log(err);
    });
});



// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});