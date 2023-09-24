const router = require('express').Router()

const {
    getAllInvoices,
    createInvoice,
    getSingleInvoice,
    deleteInvoice,
    editInvoice,
  } = require('../controllers/invoiceController');



router.get('/',  getAllInvoices);
//get a single item
router.get('/invoices/:id',  getSingleInvoice);
//create an item
router.post('/invoices',  createInvoice);
//edit an item
router.put('/invoices/:id',  editInvoice);
//delete
router.delete('/invoices/:id',  deleteInvoice);


  module.exports = router