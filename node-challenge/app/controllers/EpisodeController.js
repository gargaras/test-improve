const { Episode } = require('../models/index');
const { Director } = require('../models/index');
const { Season } = require('../models/index');
const { TVShow } = require('../models/index');

module.exports = {
    
    async findEpisode(req, res) {
        await Episode.findOne({ 
            raw: true,
            nest: true,
            include: [
                {
                    model: Director,
                    as: 'directors'
                },
                {
                    model: Season,
                    as: 'seasons',
                    include: {
                        model: TVShow,
                        as: "tvshows"
                    }
                },
            ],
            where: { id: req.params.id }
        }).then(episode => {
            let data = {
                name: episode.name,
                season: episode.seasons.number,
                tvshow: episode.seasons.tvshows.name,
                director: episode.directors.name
            };
            res.json(data);
        }).catch(err => { res.status(401).json({ msg: `Movies not found - ${err}` }) });
    }
}