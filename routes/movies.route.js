// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Movie = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model')
// all your routes here






router.get('/movies', (req, res, next) => {
  

    Movie.find()
        .then((foundMovies) => {
            console.log(foundMovies)  // [{..}, {}..]si es un arreglo de objetos            res.render("books")
                res.render("movies/movies", {foundMovies})
        })
        .catch((e) => {
            console.log(e)})

});

router.get('/movies/create', (req, res, next) => {

    Celebrity.find()
        .then((movies) => {
         res.render("movies/new-movie", {movies})
        }).catch((e) => {
            console.log(e)
        }) 




});

router.post('/movies/create', (req, res, next) => {
  
    const { title, genre, plot, cast } = req.body

    Movie.create({title, genre, plot, cast})
        .then(() => {
            res.redirect("/movies")
        })
        .catch(e => {
            console.log(e) 
            res.redirect("movies/new-movie")
        })

});

router.get('/movies/:id', (req, res, next) => {

    const id = req.params.id;

    Movie.findById(id)
        .populate('cast')
        .then((movie) => {
            res.render('movies/movie-details', { movie });
        }).catch((e) => {
            console.log(e);
        });
});

router.post('/movies/:id/delete', (req, res, next) => {
    const id = req.params.id;

    Movie.findByIdAndRemove(id)
        .then(() => {
            res.redirect('/movies');
        }).catch((e) => {
           console.log(e);
        })
});

router.get('/movies/:id/edit', (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)
        .then((movie) => {
            Celebrity.find()
                .then((celebrities) => {
                    res.render('movies/edit-movie', {movie, celebrities})
                })
        }).catch((e) => {
            console.log(e)
        });
});

router.post('/movies/:id/edit', (req, res, next) => {
    const id = req.params.id;
    const { title, genre, plot, cast } = req.body

    Movie.findByIdAndUpdate(id, { title, genre, plot, cast }, {new: true})
        .then((UpdatedMovie) => {
                console.log(UpdatedMovie)
            res.redirect('/movies')
        }).catch((e) => {
            console.log(e)
        });
});


module.exports = router