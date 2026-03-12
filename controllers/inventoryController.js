const invModel = require("../models/inventory-model")
const utilities = require("../utilities")

const inventoryController = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
inventoryController.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0]?.classification_name || "Vehicles"
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

/* ***************************
 *  Build vehicle detail view
 * ************************** */
inventoryController.buildByInventoryId = async function (req, res, next) {
  const invId = req.params.invId
  const data = await invModel.getInventoryById(invId)

  if (!data) {
    const err = new Error("Vehicle not found")
    err.status = 404
    return next(err)
  }

  const detail = await utilities.buildVehicleDetail(data)
  let nav = await utilities.getNav()
  const title = `${data.inv_make} ${data.inv_model}`
  res.render("./inventory/detail", {
    title,
    nav,
    detail,
  })
}

module.exports = inventoryController
