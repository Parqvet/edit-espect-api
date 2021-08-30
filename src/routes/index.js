const { Router } = require('express');
const router = Router();

const Fanzine = require('../models/fanzine');

const { renderHome } = require('../controllers/index');

router.get('/', renderHome);

router.get('/upload', (req, res) => {
    res.render('upload');
});

router.post('/upload', async (req, res) => {
    
    const fanzine = new Fanzine();
    fanzine.title = req.body.title;
    fanzine.description = req.body.description;
    fanzine.filename = req.file.filename;
    fanzine.path = '/images/uploads/' + req.file.filename;
    fanzine.originalname = req.file.originalname;
    fanzine.mimetype = req.file.mimetype;
    fanzine.size = req.file.size;

    await fanzine.save();
    
    res.json(fanzine);
});

router.delete('/image/delete/:id', (req, res) => {
    res.send('image deleted');
})

module.exports = router;