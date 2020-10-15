const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils')

router.get('/', controllers.tender.get);

router.post('/', auth(), controllers.tender.post);

router.put('/:id', auth(), controllers.tender.put);

router.delete('/:id', auth(), controllers.tender.delete);

module.exports = router;