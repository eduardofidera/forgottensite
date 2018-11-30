import pool from "./mysql.model"

const paginate = async options => {
  let query = "SELECT * FROM players ORDER BY name ASC" // query database to get all the players
  try {
    var result = await pool.query(query)
  } catch (err) {
    throw new Error(err)
  }

  return result
}

export { paginate }
