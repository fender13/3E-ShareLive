const mongoose = require('mongoose')

const ENV = require('dotenv')
ENV.config()

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@3e-sharelive-t5ed5.gcp.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })

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