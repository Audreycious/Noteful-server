// const express = require('express')
// const logger = require('../logger')
// const addFolderRouter = express.Router()
// const bodyParser = express.json()
// const FoldersService = require('../folders/folders-service')
// let uuid = require('uuid')

// addFolderRouter
//     .route('/')
//     .post(bodyParser, (req, res, next) => {
//         console.log(req.body)
//         let knexInstance = req.app.get('db')
//         let { name } = req.body
//         console.log(name)
        
//         // if (!name) {
//         //     logger.error(`Name is required`)
//         //     return res
//         //         .status(400)
//         //         .json({
//         //             error: { message: `Name is required` }
//         //         })
//         // }
//         const id = uuid();
//         let newFolder = {
//             id: id,
//             name: name
//         }
//         console.log(newFolder)
        
//         FoldersService.addFolder(knexInstance, newFolder)
//             .then(folder => {
//                 res.json(folder)
//             })   
//     })

// module.exports = addFolderRouter