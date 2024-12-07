const {Pool} = require('pg')

const {db} = require('./config')

const db1 = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database,
    ssl: true

});

module.exports = db1;