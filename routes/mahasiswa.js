const express = require('express');
const routerMhs = express.Router();
const ctrMhs = require('../controllers/mahasiswa.js');
const ctrUser = require('../controllers/user.js');

routerMhs.get('/mahasiswa', ctrMhs.getMhs);
routerMhs.get('/mahasiswa/:nim',ctrMhs.getMhsByNim);
routerMhs.post('/mahasiswa',ctrMhs.create);
routerMhs.put('/mahasiswa/:nim', ctrMhs.update);
routerMhs.delete('/mahasiswa/:nim', ctrMhs.delete);

module.exports = routerMhs;
