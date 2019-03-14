const router = require('express').Router()
const upload = require('../middlewares/upload')

router.post('/upload', upload.single('myFile'), (req, res) => {
    // const { name, description, type, condition, status, latitude, longitude, TagId } = req.body;
    // const { city, district, region } = req.body;
    // let locationName = null;
    // if (city) locationName = city;
    // else if (district) locationName = district;
    // else if (region) locationName = region;
    // else locationName = 'other';

    // let filename = req.body.filename,
        // path = req.body.path;
    if (req.file) {
        filename = req.file.filename;
        path = req.file.path;
    }
})

module.exports = router