const router = require('express').Router();
const validate = require("../validators/validate");

const { addUserWithGet, addUSer, updateUser, deleteUser, getUserByName, getUsers } = require('../controllers/user');


router.post('/addUser', validate, addUSer);
router.get('/', getUsers);
// router.post('/', validate ,addUSer);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/name/:name', getUserByName);

module.exports = router;
