const express = require("express")
const router = new express.Router()
const inventoryController = require("../controllers/inventoryController")
const utilities = require("../utilities/")

// Classification route
router.get(
  "/type/:classificationId",
  utilities.handleErrors(inventoryController.buildByClassificationId)
)

// Vehicle detail route
router.get(
  "/detail/:invId",
  utilities.handleErrors(inventoryController.buildByInventoryId)
)

module.exports = router
