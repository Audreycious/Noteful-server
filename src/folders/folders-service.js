const FoldersService = {
    getAllFolders(knex) {
        return knex.select('*').from('folders')
    },
    addFolder(knex, newFolder) {
        console.log(newFolder)
        return knex
            .insert(newFolder)
            .into('folders')
            .returning('*')
            .then(rows => {
                console.log(rows)
                return rows[0]
            })
    },
    getById(knex, id) {
        return knex.from('folders').select('*').where('id', id).first()
    },
}

module.exports = FoldersService