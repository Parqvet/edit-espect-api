const express = require('express');
const Fanzine = require('../models/fanzine');

const { findAll,
        findById,
        save,
        update,
        remove
    } = require('../services/fanzineService');

const renderHome = async (req, res, next) => {
    try {
        const fanzines = await findAll();
        res.render('index', { fanzines });
    } catch (error) {
        next(error);
    }
};

const createFanzine = (req, res, next) => {
    try {
        res.render('upload');
    } catch (error) {
        next(error);
    }
};

const storeFanzine = async (req, res, next) => {
    try {
        const fanzine = new Fanzine();
        fanzine.title = req.body.title;
        fanzine.description = req.body.description;
        fanzine.filename = req.file.filename;
        fanzine.path = '/images/uploads/' + req.file.filename;
        fanzine.originalname = req.file.originalname;
        fanzine.mimetype = req.file.mimetype;
        fanzine.size = req.file.size;

        await save(fanzine);
        
        res.redirect('/editorialepectacular');
    } catch (error) {
        next(error);
    }
}



module.exports = {
    renderHome,
    createFanzine,
    storeFanzine
}