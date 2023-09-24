const router = require('express').Router()

const inventoryController = require('../controllers/inventoryController');



//inventory
router.get('/',  inventoryController.getAllInventories);
router.post('/inventories',  inventoryController.createInventory);
router.put('/inventories/:id',  inventoryController.editInventory);
router.delete(
  '/inventories/:id',
  inventoryController.deleteInventory
);

module.exports = router