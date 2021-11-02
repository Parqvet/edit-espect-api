const express = require('express');
const Success = require('../helpers/succesHandler');

const { findAll,
        findById,
        save,
        update,
        remove
    } = require('../services/fanzineService');

const getFanzines = async (req, res, next) => {
    try {
        const fanzines = await findAll();
        res.json(new Success(fanzines));
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getFanzines
}