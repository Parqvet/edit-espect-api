const express = require('express');

const Fanzine = require('../models/fanzine');

const renderHome = async (req, res) => {
    const fanzines = await Fanzine.find();
    res.render('index', { fanzines });
}

module.exports = {
    renderHome
}