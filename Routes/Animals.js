const router = require('express').Router()


const {
    getAllAnimals,
    getSingleAnimal,
    createAnimal,
    editAnimal,
    deleteAnimal,
  } = require('../controllers/animalController');


//get all items
router.get('/',  getAllAnimals);
//get a single item
router.get('/animals/:id',  getSingleAnimal);
//create an item
router.post('/animals',  createAnimal);
//edit an item
router.put('/animals/:id',  editAnimal);
//delete
router.delete('/animals/:id',  deleteAnimal);

module.exports = router