const express = require('express')
const logger = require('../logger')
const foldersRouter = express.Router()
const bodyParser = express.json()
const FoldersService = require('./folders-service')
let uuid = require('uuid')

foldersRouter
    .route('/')
    .get((req, res, next) => {
        let knexInstance = req.app.get('db')
        FoldersService.getAllFolders(knexInstance)
            .then(folders => {
                if (!folders) {
                    return res.status(400).send('Folders not found')
                }
                res.json(folders)
            })    
    })
    
module.exports = foldersRouter