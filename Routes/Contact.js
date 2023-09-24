const router = require('express').Router()

const {
    getAllContacts,
    createContact,
    deleteContact,
    editContact,
  } =  require('../controllers/contactController');


//contact
router.get('/',  getAllContacts);
//create an item
router.post('/contacts',  createContact);
//edit an item
router.put('/contacts/:id',  editContact);
//delete
router.delete('/contacts/:id',  deleteContact);


module.exports = router