const { Router } = require('express');
const router = Router();

const { renderHome,
        createFanzine,
        storeFanzine } = require('../controllers/fanzine');

router.get('/', renderHome);

router.put('/fanzine/:id');

router.delete('/fanzine/delete/:id');

module.exports = router;