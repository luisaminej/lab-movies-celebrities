// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();





const Celebrity = require('../models/Celebrity.model')
// all your routes here




router.get('/celebrities', (req, res, next) => {
  

    Celebrity.find({})
        .then((foundCelebrities) => {
            console.log(foundCelebrities)  // [{..}, {}..]si es un arreglo de objetos            res.render("books")
                res.render("celebrities/celebrities", {foundCelebrities})
        })
        .catch((e) => {
            console.log(e)})

});


router.get('/celebrities/create', (req, res, next) => {
  
    res.render("celebrities/new-celebrity")




});

router.post('/celebrities/create', (req, res, next) => {
  
    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({name, occupation, catchPhrase})
        .then(() => {
            res.redirect("/celebrities")
        })
        .catch(e => {
            console.log(e) 
            res.redirect("celebrities/new-celebrity")
        })

});








module.exports = router;