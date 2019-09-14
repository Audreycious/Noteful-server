const NotesService = {
    getAllNotes(knex) {
        return knex.select('*').from('notes')
    },
    addNote(knex, newNote) {
        return knex
            .insert(newNote)
            .into('notes')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    getById(knex, id) {
        return knex.from('notes').select('*').where('id', id).first()
    },
}

module.exports = NotesService