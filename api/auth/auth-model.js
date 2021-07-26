const db = require('../data/db-config')

const findByID = (id) => {
    return db('users').where('user_id',id).first()
}

const findByUsername = (username) => {
    return db('users').where('username', username).first()
}

const addUser = async({ username, password }) => {
    await db('users').insert({ username: username, password: password })
}

module.exports = {addUser, findByID, findByUsername}