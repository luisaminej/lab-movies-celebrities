const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const movieSchema        = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast:  {
        ref: 'celebrity',
        type: mongoose.Schema.Types.ObjectId
    }


},

{    
    timestamps:true,
   
})

//MODELO

const Movie = mongoose.model("Movie", movieSchema)

//EXPORTACIÓN

module.exports = Movie