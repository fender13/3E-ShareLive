const mongoose = require('mongoose')

const ENV = require('dotenv')
ENV.config()

const dbName = process.env.DB_NAME
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

const schema = mongoose.Schema

const FavouriteSchema = new schema({
    UserId: {
        type: schema.Types.ObjectId,
        reff: 'Users'
    },
    SharesId: {
        type: schema.Types.ObjectId,
        reff: 'Shares'
    }
})

var Favourites = mongoose.model('Favourites', FavouriteSchema)

module.exports = Favourites