const router = require('express').Router()
const upload = require('../middlewares/upload')

router.post('/upload', upload.single('myFile'), (req, res) => {
    console.log(req.file)
    if (req.file) {
        filename = req.file.filename;
        path = req.file.path;
    }
})

module.exports = router