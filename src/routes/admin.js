const { Router } = require('express');
const router = Router();

const { renderFanzines, 
        createFanzine, 
        storeFanzine, 
        renderLogin
    } = require('../controllers/admin');

router.get('/fanzines', renderFanzines);

router.get('/upload', createFanzine);
router.post('/upload', storeFanzine);

router.get('/login', renderLogin);

module.exports = router;