const express = require('express');

const renderHome = (req, res) => {
    res.render('index');
}

module.exports = {
    renderHome
}