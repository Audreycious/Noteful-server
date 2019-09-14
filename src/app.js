require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const bodyParser = express.json()
let uuid = require('uuid')
const FoldersService = require('./folders/folders-service')

const foldersRouter = require('./folders/folders-router')
const notesRouter = require('./notes/notes-router')
// const addFolderRouter = require('./add-folder/add-folder-router')

const app = express()


const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common'

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
// app.use(function validateBearerToken(req, res, next) {
//     const apiToken = process.env.API_TOKEN
//     const authToken = req.get('Authorization')
  
//     if (!authToken || authToken.split(' ')[1] !== apiToken) {
    // logger.error(`Unauthorized request to path: ${req.path}`);
//       return res.status(401).json({ error: 'Unauthorized request' })
//     }
//     next()
// })

app.use("/api/folders", foldersRouter)
app.use("/api/notes", notesRouter)
app.post("/api/add-folder", bodyParser, (req, res, next) => {
        let knexInstance = req.app.get('db')
        let { name } = req.body
        
        if (!name) {
            logger.error(`Name is required`)
            return res
                .status(400)
                .json({
                    error: { message: `Name is required` }
                })
        }
        const id = uuid();
        let newFolder = {
            id: id,
            name: name
        }
        // console.log(newFolder)
        
        FoldersService.addFolder(knexInstance, newFolder)
            .then(response => {
                // console.log(response)
                return response})
            .then(folder => {
                return res.status(200).json(folder)
            })   
        
       
})


// app.get('/notes', (req, res) => {
//     res.json(notes)
// })



app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        res = { message: error.message, error }
    }
    res.status(500).json(res)
})

module.exports = app