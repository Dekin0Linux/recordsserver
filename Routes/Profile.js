const router = require('express').Router()

const profileController = require('../controllers/profileController');


//profile
router.get('/',  profileController.getAllProfiles);
router.post('/profiles',  profileController.createProfile);
router.put('/profiles/:id',  profileController.editProfile);
router.delete('/profiles/:id',  profileController.deleteProfile);


module.exports = router