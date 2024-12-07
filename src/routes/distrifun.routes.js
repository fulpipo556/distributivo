const { Router } = require ('express');
const db = require('../db');
const router = Router();
const{getAllDistrifun, getDistrifun, crearDistrifun, eliminarDistrifun, modificaDistrifun } = require ('../controllers/distrifun.controllers')


router.get('/distrifun', getAllDistrifun);

router.get('/distrifun/:id', getDistrifun);

router.post('/distrifun', crearDistrifun );

router.delete('/distrifun/:id', eliminarDistrifun);

router.put('/distrifun/:id',modificaDistrifun );

module.exports = router;