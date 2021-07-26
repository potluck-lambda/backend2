const db = require('../data/db-config')

const getAll = () => {
    return db('potlucks')
}

const getById = (id) => {
    return db('potlucks').where('potluck_id', id).first()
}

const addPotluck = (potluck) => {
    return db('potlucks').insert(potluck,
        ['potluck_name',
        'potluck_date',
        'potluck_time',
        'potluck_street',
        'potluck_city',
        'potluck_country',
        'potluck_zip'])
}

const editPotluck = (id, data) => {
    return  db('potlucks').where('potluck_id', id).update(data,
        ['potluck_name',
        'potluck_date',
        'potluck_time',
        'potluck_street',
        'potluck_city',
        'potluck_country',
        'potluck_zip'])
}

const deletePotluck = async (id) => {
    const deleted = await getById(id)
    await db('potlucks').where('potluck_id', id).del()
    return deleted
}


module.exports = {getAll,
                getById,
                addPotluck,
                editPotluck,
                deletePotluck}