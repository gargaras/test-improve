const express = require('express');
const router = express.Router();

// Controllers
const AuthController = require('./controllers/AuthController');
const MovieController = require('./controllers/MovieController');
const EpisodeController = require('./controllers/EpisodeController');
const ActorController = require('./controllers/ActorController');

// Middlewares
const auth = require('./middlewares/auth');

// Home
router.get('/', (req, res) => res.json({ message: 'This is Home' }));

// Auth
router.post('/api/signin', AuthController.signIn);
router.post('/api/signup', AuthController.signUp);
router.post('/api/refresh', AuthController.refresh);

// Movies
router.get('/api/movies', auth, MovieController.findMovie);

// Episodes
router.get('/api/episodes/:id', auth, EpisodeController.findEpisode);

// Actors
router.get('/api/actors/:id', auth, ActorController.findActor);

module.exports = router;