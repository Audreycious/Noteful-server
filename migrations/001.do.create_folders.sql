DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS folders;
SET TIME ZONE 'America/Chicago';

CREATE TABLE folders (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE notes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    modified TIMESTAMP NOT NULL,
    folder_id TEXT REFERENCES folders(id) ON DELETE CASCADE NOT NULL,
    content TEXT
);