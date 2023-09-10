const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./database');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { authorizationMiddleware } = require('./middlewares/auth.middleware');
const user = require('./routes/user');
const tasks = require('./routes/tasks');

db.connect();

const app = express();
const port = 8080;
const host = '0.0.0.0';

const corsOptions = {
  origin: 'https://famous-travesseiro-f2f70b.netlify.app', // Replace with your frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Set to true if you need to allow cookies with CORS
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(bodyParser.json());

app.use('/api/user/', user);
app.use('/api/tasks', authorizationMiddleware, tasks);

const angularRoutePaths = [
  '/',
  '/login',
  '/registration',
  '/tasks',
];

angularRoutePaths.forEach(route => {
  app.get(route, (req, res) => {
    const filePath = path.join(__dirname, '..', 'dist', 'en-US', 'index.html');
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error(err);
        res.status(err.status || 500).send('Internal server error');
      }
    });
  });
})

app.listen(port, host, () => console.log(`Express server is listening on http://localhost:${port}`))