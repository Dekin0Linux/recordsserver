// // if (process.env.NODE_ENV != 'production') {
// //   require('dotenv').config();
// // }


// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const connectToDb = require('./config/connectToDb');
// const dotenv = require('dotenv')


// const animalController = require('./controllers/animalController');
// const diseaseController = require('./controllers/diseaseController');
// const transactionController = require('./controllers/transactionController');



// const userController = require('./controllers/userController');
// const invoiceController = require('./controllers/invoiceController');
// const contactController = require('./controllers/contactController');
// const employeeController = require('./controllers/employeeController');
// const feedController = require('./controllers/feedController');
// const inventoryController = require('./controllers/inventoryController');
// const matingController = require('./controllers/matingController');
// const medController = require('./controllers/medController');
// const quarantineController = require('./controllers/quarantineControllers');
// const vaccinationController = require('./controllers/vaccinationController');
// const profileController = require('./controllers/profileController');
// const requireAuth = require('./middleware/requireAuth');

// const app = express();
// dotenv.config()

// //enable express read json so server can read it, set limit for image size
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );

// //DB connection
// connectToDb();

// //routes
// //AUTH
// app.post('/signup', userController.signup);
// app.post('/login', userController.login);
// app.get('/logout', userController.logout);
// app.get('/check-auth', userController.checkAuth);

// //ANIMALS
// //get all items
// app.get('/animals',  animalController.getAllAnimals);
// //get a single item
// app.get('/animals/:id',  animalController.getSingleAnimal);
// //create an item
// app.post('/animals',  animalController.createAnimal);
// //edit an item
// app.put('/animals/:id',  animalController.editAnimal);
// //delete
// app.delete('/animals/:id',  animalController.deleteAnimal);

// //TRANSACTIONS
// //get all items
// app.get('/transactions',  transactionController.getAllTransactions);
// //get a single item
// app.get(
//   '/transactions/:id',
  
//   transactionController.getSingleTransaction
// );
// //create an item
// app.post('/transactions',  transactionController.createTransaction);
// //edit an item
// app.put(
//   '/transactions/:id',
  
//   transactionController.editTransaction
// );
// //delete
// app.delete(
//   '/transactions/:id',
  
//   transactionController.deleteTransaction
// );

// //invoice
// app.get('/invoices',  invoiceController.getAllInvoices);
// //get a single item
// app.get('/invoices/:id',  invoiceController.getSingleInvoice);
// //create an item
// app.post('/invoices',  invoiceController.createInvoice);
// //edit an item
// app.put('/invoices/:id',  invoiceController.editInvoice);
// //delete
// app.delete('/invoices/:id',  invoiceController.deleteInvoice);

// //contact
// app.get('/contacts',  contactController.getAllContacts);
// //create an item
// app.post('/contacts',  contactController.createContact);
// //edit an item
// app.put('/contacts/:id',  contactController.editContact);
// //delete
// app.delete('/contacts/:id',  contactController.deleteContact);

// //Employee
// app.get('/employees',  employeeController.getAllEmployees);
// app.get('/employees/:id',  employeeController.getSingleEmployee);
// app.post('/employees',  employeeController.createEmployee);
// app.put('/employees/:id',  employeeController.editEmployee);
// app.delete('/employees/:id',  employeeController.deleteEmployee);

// //Feed
// app.get('/feeds',  feedController.getAllFeeds);
// app.post('/feeds',  feedController.createFeed);
// app.put('/feeds/:id',  feedController.editFeed);
// app.delete('/feeds/:id',  feedController.deleteFeed);

// //profile
// app.get('/profiles',  profileController.getAllProfiles);
// app.post('/profiles',  profileController.createProfile);
// app.put('/profiles/:id',  profileController.editProfile);
// app.delete('/profiles/:id',  profileController.deleteProfile);

// //inventory
// app.get('/inventories',  inventoryController.getAllInventories);
// app.post('/inventories',  inventoryController.createInventory);
// app.put('/inventories/:id',  inventoryController.editInventory);
// app.delete(
//   '/inventories/:id',
  
//   inventoryController.deleteInventory
// );

// //Disease
// app.get('/diseases',  diseaseController.getAllDiseases);
// app.post('/diseases',  diseaseController.createDisease);
// app.put('/diseases/:id',  diseaseController.editDisease);
// app.delete('/diseases/:id',  diseaseController.deleteDisease);

// //mating
// app.get('/matings',  matingController.getAllMatings);
// app.post('/matings',  matingController.createMating);
// app.put('/matings/:id',  matingController.editMating);
// app.delete('/matings/:id',  matingController.deleteMating);

// //meds
// app.get('/meds',  medController.getAllMeds);
// app.post('/meds',  medController.createMed);
// app.put('/meds/:id',  medController.editMed);
// app.delete('/meds/:id',  medController.deleteMed);

// //quarantine
// app.get('/quarantines',  quarantineController.getAllQuarantines);
// app.post('/quarantines',  quarantineController.createQuarantine);
// app.put('/quarantines/:id',  quarantineController.editQuarantine);
// app.delete(
//   '/quarantines/:id',
  
//   quarantineController.deleteQuarantine
// );

// //vaccination
// app.get('/vaccinations',  vaccinationController.getAllVaccinations);
// app.post('/vaccinations',  vaccinationController.createVaccination);
// app.put(
//   '/vaccinations/:id',
  
//   vaccinationController.editVaccination
// );
// app.delete(
//   '/vaccinations/:id',
  
//   vaccinationController.deleteVaccination
// );

// app.use((req, res, next) => {
//   next(createError(404));
// });
// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });

// //server start
// app.listen(process.env.PORT, '127.0.0.1', function () {
//   console.log('server is listening on ' + process.env.PORT);
// });


const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./config/connectToDb');
const dotenv = require('dotenv')
const requireAuth = require('./middleware/requireAuth');

const {signup,login,logout,checkAuth,} = require('./controllers/userController');

// ANIMAL ROUTER
const animalRouter = require('./Routes/Animals')

const app = express()
app.use(express.json())
connectToDb()
dotenv.config()

// //routes
// //AUTH
app.post('/signup', signup);
app.post('/login', login);
app.get('/logout', logout);
app.get('/check-auth', checkAuth);
// END OF AUTH //

app.use('/animals',animalRouter) 

app.listen(5000,()=>{
  console.log('server running')
})
