const router = require('express').Router()
const Potlucks = require('./potluck-model')
const {checkId, checkPayload} = require('./potluck-mw')


router.get('/', (req, res, next) => {
    Potlucks.getAll()
        .then(potlucks => {
            res.json(potlucks);
        })
        .catch(next)
})

router.get('/:id', checkId, (req, res, next) => {
    const { id } = req.params
    Potlucks.getById(id)
    .then(potluck => {
        res.json(potluck)
    })
    .catch(next)
})


router.post('/', checkPayload, (req, res, next) => {
    Potlucks.addPotluck(req.body)
         .then(newClass => {
             res.status(201).json(newClass)
         })
         .catch(next)
 })


 router.put('/:id', checkId, (req, res, next) => {
     const { id } = req.params
     Potlucks.editPotluck(id, req.body)
     .then(update => {
         res.json(update)
     })
     .catch(next)
 })


 router.delete('/:id', checkId, (req, res, next) => {
     const { id } = req.params
     Potlucks.deletePotluck(id)
     .then(deleted => {
         res.json(deleted)
     })
     .catch(next)
 })

 module.exports = router