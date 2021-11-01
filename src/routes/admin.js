const { Router } = require('express');
const router = Router();

const { renderFanzines, storeFanzine } = require('../controllers/admin');

router.get('/fanzines', renderFanzines);

router.post('/upload', storeFanzine);

module.exports = router;