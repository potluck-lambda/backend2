const Users = require('./user-model')

const checkId = async (req, res, next) => {
    const { id } = req.params
    const check = await Users.findUserById(id)
    !check ? res.status(404).json({message: `User with ID of ${id} not found.`}) : next()
}

const checkBody = async (req, res, next) => {
    const { username, password } = req.body
    !username || !password ? res.status(401).json({ message: 'Username and password are required.' }) : next()
}

module.exports = {
    checkId,
    checkBody
}