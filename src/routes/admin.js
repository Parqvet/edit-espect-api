const { Router } = require('express');
const router = Router();

const { getAllFanzines,  
        storeFanzine, 
    } = require('../controllers/admin');

router.get('/fanzines', getAllFanzines);

router.post('/upload', storeFanzine);

module.exports = router;