const router = require('express').Router();
const {checkBody, validateUniqueUser, checkUsernameExists} = require('./auth-mw')
const bcrypt = require('bcrypt')
const Auth = require('./auth-model')
const tokenBuilder = require('./token-builder')

router.post('/sign-up', checkBody, validateUniqueUser, (req, res, next) => {

  const { username, password } = req.body
  const hash = bcrypt.hashSync(password, 8)
  Auth.addUser({ username, password: hash })
  .then(newUser => {
    res.status(201).json(newUser)
  })
  .catch(next)

});

router.post('/login', checkBody, checkUsernameExists, (req, res, next) => {
      if(bcrypt.compareSync(req.body.password, req.user.password)){
        const token = tokenBuilder(req.user)
        res.json({
          message: `Welcome, ${req.user.username}`,
          user_id: req.user.user_id,
          token
        })
      }
      else{
        next({status:401, message:'invalid credentials'})
      }
});

module.exports = router;