const mongoose = require('mongoose')
const ENV = require('dotenv')
ENV.config()

const dbName = process.env.DB_NAME
mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@3e-sharelive-t5ed5.gcp.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })
const schema = mongoose.Schema

const SharingSchema = new schema({
    name: {
        type: String,
        require: true
    },
    path: {
        type: String,
        required: true
    },
    UserId: {
        type: schema.Types.ObjectId,
        reff: 'Users',
        required: true
    }
})

SharingSchema.path('name').validate(function (value, respond) {
    return mongoose
        .model('Shares')
        .collection.count({ name: value })
        .then(function (count) {
            return !count
        })
        .catch(function (err) {
            throw err
        })
}, 'Name already exists.')


var Shares = mongoose.model('Shares', SharingSchema)

module.exports = Shares