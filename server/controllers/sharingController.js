const Share = require('../models/sharing')
const mongoose = require('mongoose')

class Photo {
    static uploaded(req, res) {
            console.log("FROM SERVER     ",req.file)
            let file = {}
            if (req.file) {
                file = {
                    name : req.file.originalname,
                    path : "/home/eltim/Desktop/project-week2/3E-ShareLive/server/public/upload",
                    UserId: mongoose.Types.ObjectId()
                }
                Share
                    .create(file)
                    .then((data) => {
                        console.log(data, "IIIIIII");
                        
                        res.status(201).json(data)
                    })
                    .catch((err) => {
                        console.log("ERR",err)
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