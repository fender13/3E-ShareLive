const model = require('../models/user')
const jwtConvert = require('../helpers/jwtConvert')
const ENV = require('dotenv')
ENV.config()
const bcrypt = require('bcrypt')
const comparePassword = require('../helpers/comparePassword')

class User {
    static userRegister(req, res) {
        const { username, email, password } = req.body
        model.create({
            username: username,
            email: email,
            password: password
        })
        .then(function(data) {
            res.status(210).json(data)
        })
        .catch(function(e) {
            res.status(500).json({
                error: e.message
            })
        })
    }

    static userLogin(req, res) {
        console.log(req.body)
        model
            .findOne({
                username: req.body.username
            })
            .then((data) => {
                console.log(data)
                if(!data){
                    res.status(400).json({
                        message: `Wrong username/password`
                    })
                }
                else {
                    let isValid = bcrypt.compareSync(req.body.password, data.password)
                    if(isValid){
                        let token = jwtConvert.sign({
                            email: data.email
                        })
                        res.status(200).json(token)
                    }
                    else{
                        console.log('masuk error 2')
                        res.status(400).json({
                            message: `Wrong username/password`
                        })
                    }
                }
            })
            .catch((err) => {
                console.log('masuk terakir')
                res.status(400).json(err)
            })
    }

    static find(req, res) {
        model.find()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
    }
}

module.exports = User