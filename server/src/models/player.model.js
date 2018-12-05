import pool from "./mysql.model"

const paginate = async options => {
  const { page, limit, orderBy, filterBy } = options

  const query = `SELECT id, name, vocation, ${filterBy} FROM players ORDER BY ${filterBy} ${orderBy},name ASC limit ${(page -
    1) *
    limit},${limit}`

  const maxRowsQuery = "SELECT count(*) as maxRows FROM players"
  try {
    var players = await pool.query(query)
    var maxRows = await pool.query(maxRowsQuery)
  } catch (err) {
    throw new Error(err)
  }

  return { players, maxRows: maxRows[0].maxRows }
}

export { paginate }
