const {Router} = require('express');
const router = Router();

const getUsers = require('./users');
const register = require('./register');
const login = require('./login');

router.get('/users', getUsers);
router.post('/register', register);
router.post('/login', login);

module.exports = router;

