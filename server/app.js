const express = require('express')

const app = express()
const cors = require('cors')

// require routers
const userRouter = require('./routers/userRouter')
const shareRouter = require('./routers/sharingRouter')

// dotenv
const ENV = require('dotenv')
ENV.config()

// set port
const port = Number(process.env.PORT)

// set body-parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// set cors
app.use(cors())


// set routers
app.use('/user', userRouter)
app.use('/share', shareRouter)

// if routers not found
app.get('*', (req, res) => {
    res.status(404).json({
        message: 'PAGE NOT FOUND'
    })
})

// server listen port
app.listen(port, () => {
    console.log('SERVER IS ON AND LISTEN TO PORT', port)
})