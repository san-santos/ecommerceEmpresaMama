const router = require('express').Router();

const ListDataRouter = require('./listdatarouter');

router.use('/', ListDataRouter);

module.exports = router;