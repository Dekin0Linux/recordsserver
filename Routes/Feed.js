
const router = require('express').Router()

const feedController = require('../controllers/feedController');


//Feed
router.get('/',  feedController.getAllFeeds);
router.post('/feeds',  feedController.createFeed);
router.put('/feeds/:id',  feedController.editFeed);
router.delete('/feeds/:id',  feedController.deleteFeed);

module.exports = router