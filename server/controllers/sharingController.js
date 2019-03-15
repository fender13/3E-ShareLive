const Share = require('../models/sharing')
const mongoose = require('mongoose')

class Photo {
    static uploaded(req, res) {
        console.log("masok pak")
            console.log(req.file)
            let file = {}
            if (req.file) {
                file = {
                    name : req.file.filename,
                    path : req.file.path,
                    UserId: mongoose.Types.ObjectId()
                }
                Share
                    .create(file)
                    .then((data) => {
                        res.status(201).json(data)
                    })
                    .catch((err) => {
                        res.status(400).json(err)
                    })
            }
   
    }

    static findAllPhoto(req, res) {
        Share
            .find()
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static updateName(req, res) {
        Share
            .update({
                _id: req.params.id
            }, {
                $set: req.body
            })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static delete(req, res) {
        Share
            .findByIdAndDelete({ _id: req.params.id })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
}

module.exports = Photo