const { expect } = require('chai')
const knex = require('knex')
const app = require('../src/app')
const { makeNotesArray, makeFoldersArray } = require('./noteful.fixtures')

describe('Noteful Endpoints', function() {
    let db
    
    before('make knex instance', () => {
        db = knex({
        client: 'pg',
        connection: process.env.TEST_DB_URL,
        })
        app.set('db', db)
    })
    before('set the timezone', () => {
        db.raw("SET timezone 'America/Chicago'")
    })
    before('clean the table', () => db.raw('TRUNCATE folders, notes RESTART IDENTITY CASCADE'))


    afterEach('cleanup',() => db.raw('TRUNCATE folders, notes RESTART IDENTITY CASCADE'))

    after('disconnect from db', () => db.destroy())

        describe(`GET /api/folders`, () => {
            context(`Given no folders`, () => {
                it(`responds with 200 and an empty list`, () => {
                    return supertest(app)
                        .get('/api/folders')
                        .expect(200, [])
                })
            })
            context(`Given there are folders in the database`, () => {
                let testFolders = makeFoldersArray()
                beforeEach('insert folders', () => {
                    return db
                        .into('folders')
                        .insert(testFolders)
                })
                it(`responds with 200 and an array of testFolders`, () => {
                    return supertest(app)
                        .get('/api/folders')
                        .expect(200, testFolders)
                })
            })
        })

        describe(`GET /api/notes`, () => {
            context(`Given no notes`, () => {
                it(`responds with 200 and an empty list`, () => {
                    return supertest(app)
                        .get('/api/notes')
                        .expect(200, [])
                })
            })
            context(`Given there are notes in the database`, () => {
                let testFolders = makeFoldersArray()
                let testNotes = makeNotesArray()
                beforeEach('insert notes', () => {
                    return db
                        .into('folders')
                        .insert(testFolders)
                        .then(() => {
                            return db
                            .into('notes')
                            .insert(testNotes)
                        })
                })
                it(`responds with 200 and an array of testNotes`, () => {
                    return supertest(app)
                        .get('/api/notes')
                        .expect(200, testNotes)
                })
            })
        })

})
