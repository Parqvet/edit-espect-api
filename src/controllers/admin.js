const express = require('express');
const Success = require('../helpers/succesHandler');
const fs = require('fs-extra');
const cloudinary = require('../loaders/cloudinary');

const Fanzine = require('../models/fanzine');

const { findAll,
        findById,
        save,
        update,
        remove
    } = require('../services/fanzineService');

const getAllFanzines = async (req, res, next) => {
    try {
        const fanzines = await findAll();
        res.json(new Success(fanzines));
    } catch (error) {
        next(error);
    }
};

const storeFanzine = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const imageCloud = await cloudinary.v2.uploader.upload(req.file.path);

        const fanzine = new Fanzine({
            title,
            description,
            imageURL: imageCloud.url,
            public_id: imageCloud.public_id,
            filename: req.file.filename,
            originalName: req.file.originalName,
            mimetype: req.file.mimetype,
            size: req.file.size
        })

        await save(fanzine);
        await fs.unlink(req.file.path);
        res.status(201).json(new Success(fanzine));
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllFanzines,
    storeFanzine
}