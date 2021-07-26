const Potlucks = require('./potluck-model')

const checkId = async (req, res, next) => {
    const { id } = req.params
    const potluck = await Potlucks.getById(id)
    !potluck ? res.status(404).json({message: `Potluck with ID of ${id} not found`}) : next()
}

const checkPayload = async (req, res, next) => {
    const {
    potluck_name,
    potluck_date,
    potluck_time,
    potluck_street,
    potluck_city,
    potluck_country,
    potluck_zip} = req.body

    if (
    !potluck_name||
    !potluck_date||
    !potluck_time||
    !potluck_street||
    !potluck_city||
    !potluck_country||
    !potluck_zip) {
        res.status(401).json({ message: 'Please enter all the required fields to add a new potluck' })
    } else {
        next();
    }
}

module.exports = {checkId, checkPayload}