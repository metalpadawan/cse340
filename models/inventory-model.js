// models/inventory-model.js
const pool = require("../database/")

/* existing getClassifications + getInventoryByClassificationId ... */

/* ***************************
 *  Get single vehicle by ID
 * ************************** */
async function getInventoryById(inv_id) {
  try {
    const sql = `SELECT i.*, c.classification_name
                 FROM public.inventory AS i
                 JOIN public.classification AS c
                 ON i.classification_id = c.classification_id
                 WHERE i.inv_id = $1`
    const data = await pool.query(sql, [inv_id])
    return data.rows[0] || null
  } catch (error) {
    console.error("getInventoryById error: " + error)
    throw error
  }
}

module.exports = {
  getClassifications,
  getInventoryByClassificationId,
  getInventoryById,
}
