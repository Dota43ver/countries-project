const express = require('express')
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const {Country , Turism, country_turisms} = require("../db.js");
const { Op } = require("sequelize");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//trying to get the data from the api


module.exports = router;
