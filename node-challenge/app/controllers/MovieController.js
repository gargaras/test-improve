const { Movie } = require('../models/index');
const { Director } = require('../models/index');
const { Actor } = require('../models/index');

module.exports = {
    
    async findMovie(req, res) {
        let data = {
            name: "",
            year: 0,
            rate: 0,
            director: "",
            actors: []
        };
        let movies = await Movie.findAll({ 
            raw: true,
            nest: true,
            include: {
                model: Actor,
                as: 'actors'
            },
            where: { name: req.query.filter },
            order: [
                [req.query.sort, req.query.order.toUpperCase()]
            ]
        }).then(movie => {
            data.name = movie[0].name;
            data.year = movie[0].year;
            data.rate = movie[0].rate;
            movie.map(m => {
                data.actors.push(m.actors.name);
                return m;
            });
            Director.findByPk(movie[0].directorId)
            .then(director => {
                data.director = director.name;
                res.json(data);
            }).catch(err => { res.status(401).json({ msg: `Director not found - ${err}` }) });
        }).catch(err => { res.status(401).json({ msg: `Movies not found - ${err}` }) });
    }
}