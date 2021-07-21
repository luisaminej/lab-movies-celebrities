const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const celebritySchema        = new Schema({
    name: String,
    ocupation: String,
    catchPhrase: String,


},

{    
    timestamps:true,
   
})

//MODELO

const Celebrity = mongoose.model("Celebrity", celebritySchema)

//EXPORTACIÓN

module.exports = Celebrity