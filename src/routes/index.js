const { Router } = require('express');
const router = Router();

const { getFanzines } = require('../controllers/fanzine');

router.get('/', getFanzines);

module.exports = router;