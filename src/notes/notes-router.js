const express = require('express')
const logger = require('../logger')
const notesRouter = express.Router()
const NotesService = require('./notes-service')

notesRouter
    .route('/')
    .get((req, res, next) => {
        let knexInstance = req.app.get('db')
        NotesService.getAllNotes(knexInstance)
            .then(notes => {
                if (!notes) {
                    logger.log(`Notes not found`)
                    return res.status(400).send('Notes not found')
                }
                res.json(notes)
            })    
    })

module.exports = notesRouter