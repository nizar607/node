// classrooom routes

const express = require('express');
const router = express.Router();
const {addClassroom, updateClassroom, deleteClassroom, getClassrooms} = require('../controllers/classroom');

router.post('/', addClassroom);
router.patch('/:id', updateClassroom);
router.delete('/:id', deleteClassroom);
router.get('/', getClassrooms);

module.exports = router;