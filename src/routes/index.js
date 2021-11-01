const { Router } = require('express');
const router = Router();

const { renderHome,
        createFanzine,
        storeFanzine } = require('../controllers/fanzine');

router.get('/', renderHome);

module.exports = router;