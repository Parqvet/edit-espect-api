const { Router } = require('express');
const router = Router();

const { renderHome,
        createFanzine,
        storeFanzine } = require('../controllers/fanzine');

router.get('/', renderHome);

router.get('/upload', createFanzine);
router.post('/upload', storeFanzine);

router.put('/fanzine/:id');

router.delete('/fanzine/delete/:id');

module.exports = router;