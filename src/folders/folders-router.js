const express = require('express')
const logger = require('../logger')
const foldersRouter = express.Router()
const FoldersService = require('./folders-service')

foldersRouter
    .route('/')
    .get((req, res, next) => {
        let knexInstance = req.app.get('db')
        FoldersService.getAllFolders(knexInstance)
            .then(folders => {
                if (!folders) {
                    logger.log(`Folders not found`)
                    return res.status(400).send('Folders not found')
                }
                res.json(folders)
            })    
    })
    
module.exports = foldersRouter