 const mongoose = require('mongoose')

async function connect(){
  console.log('Locating database!')
  await mongoose.connect("mongodb+srv://DemonS:DemonS2121@cluster0.hrqmx.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("Connected to databse. Enjoy coding my dude!")
}

module.exports = connect()