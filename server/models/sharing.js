const mongoose = require('mongoose')


const dbName = process.env.DB_NAME
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

const schema = mongoose.Schema

const UserSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        require: true
    }
})

UserSchema.pre('save', function(next) {
    var user = this
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next()
    // generate a salt
    bcrypt.genSalt(saltrounds, function(err, salt) {
        if (err) return next(err)
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err)
            // override the cleartext password with the hashed one
            user.password = hash
            next()
        })
    })
})

var Users = mongoose.model('Users', UserSchema)

module.exports = Users