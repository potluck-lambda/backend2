const router = require('express').Router()
const Users = require('./users-model.js')

const { checkId, checkBody } = require('./users-mw.js')


router.get('/', (req, res, next) => {
    Users.getUsers()
    .then(users => {
        res.json(users)
    })
    .catch(next)
})

router.get('/:id', checkId, (req, res, next) => {
    const { id } = req.params
    Users.findUserById(id)
    .then(user => {
        res.json(user)
    })
    .catch(next)
})

router.post('/', checkBody, (req, res, next) => {
    Users.addUser(req.body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(next)
})

router.put('/:id', checkId, (req, res, next) => {
    const { id } = req.params
    Users.editUser(id, req.body)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(next)
})

router.delete('/:id', checkId, (req, res, next) => {
    const { id } = req.params
    Users.deleteUser(id)
        .then(user => {
            res.json(user)
        })
        .catch(next)
})

module.exports = router