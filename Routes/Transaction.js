const router = require('express').Router()
const {
    getAllTransactions,
    getSingleTransaction,
    createTransaction,
    editTransaction,
    deleteTransaction,
  } = require('../controllers/transactionController');


  //get all items
router.get('/', getAllTransactions);
//get a single item
router.get(
  '/transactions/:id',
  
getSingleTransaction
);
//create an item
router.post('/transactions', createTransaction);
//edit an item
router.put(
  '/transactions/:id',editTransaction);
//delete
router.delete(
  '/transactions/:id',deleteTransaction);


  module.exports = router