const express = require('express')
const logger = require('../logger')
const notesRouter = express.Router()
const bodyParser = express.json()
const NotesService = require('./notes-service')

notesRouter
    .route('/')
    .get((req, res, next) => {
        let knexInstance = req.app.get('db')
        NotesService.getAllNotes(knexInstance)
            .then(notes => {
                if (!notes) {
                    return res.status(400).send('Notes not found')
                }
                res.json(notes)
            })    
    })
//   .post(bodyParser, (req, res) => {

//   })

// foldersRouter
//   .route('/card/:id')
//   .get((req, res) => {

//   })
//   .delete((req, res) => {

//   })

module.exports = notesRouter