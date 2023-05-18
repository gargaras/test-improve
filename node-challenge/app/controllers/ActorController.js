const { Actor } = require('../models/index');
const { Movie } = require('../models/index');
const { TVShow } = require('../models/index');

module.exports = {
    
    async findActor(req, res) {
        let data = {
            name: "",
            age: 0,
            tvshows: [],
            movies: []
        };
        await Actor.findByPk(req.params.id)
        .then(actor => {
            data.name = actor.name;
            data.age = actor.age;
            Movie.findAll({
                raw: true,
                nest: true,
                include: {
                    model: Actor,
                    as: 'actors'
                }
            }).then(movie => {
                movie.map(m => {
                    if (m.actors.id === actor.id) data.movies.push(m.name);
                    return m;
                });
            }).then(() => {
                TVShow.findAll({
                    raw: true,
                    nest: true,
                    include: {
                        model: Actor,
                        as: 'actors'
                    }
                }).then(tvshow => {
                    tvshow.map(tv => {
                        if (tv.actors.id === actor.id) data.tvshows.push(tv.name);
                        return tv;
                    });
                    res.json(data);
                });
            })
        }).catch(err => { res.status(401).json({ msg: `Movies not found - ${err}` }) });
    }
}