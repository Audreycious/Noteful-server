const faker = require('faker')

const folders = [
    {
        "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Important"
    },
    {
        "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Super"
    },
    {
        "id": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Spangley"
    },
]

const notes = [
    {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Dogs",
        "modified": "2019-01-03T00:00:00.000Z",
        "folder_id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        "content": faker.lorem.paragraphs()
      },
      {
        "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Cats",
        "modified": "2018-08-15T23:00:00.000Z",
        "folder_id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "content": faker.lorem.paragraphs()
      },
      {
        "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Pigs",
        "modified": "2018-03-01T00:00:00.000Z",
        "folder_id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "content": faker.lorem.paragraphs()
      },
]

module.exports = { folders, notes }