import pool from "./mysql.model"

const paginate = async options => {
  const { page, limit, orderBy, filterBy } = options

  let query = `SELECT id, name, vocation, ${filterBy}  FROM players ORDER BY ${filterBy} ${orderBy} limit ${limit}` // query database to get all the players
  try {
    var result = await pool.query(query)
  } catch (err) {
    throw new Error(err)
  }

  return result
}

export { paginate }
