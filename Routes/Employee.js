const router = require('express').Router()

const employeeController = require('../controllers/employeeController');

//Employee
router.get('/',  employeeController.getAllEmployees);
router.get('/employees/:id',  employeeController.getSingleEmployee);
router.post('/employees',  employeeController.createEmployee);
router.put('/employees/:id',  employeeController.editEmployee);
router.delete('/employees/:id',  employeeController.deleteEmployee);



module.exports = router