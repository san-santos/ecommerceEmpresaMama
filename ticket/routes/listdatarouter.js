const router = require('express').Router();

const ListDataController = require('../controllers/listDataController');

//Funções:
router.route('./listdatarouter').get((req, res) => ListDataController.getAll(req, res))

module.exports = router;