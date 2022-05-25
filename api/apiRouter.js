const {Router} = require('express');
const router = Router();
const loginMiddleware = require('../middleware/loginMiddleware')

const getUsers = require('./users');
const register = require('./register');
const login = require('./login');

router.get('/users', loginMiddleware, getUsers);
router.post('/register', register);
router.post('/login', login);

module.exports = router;

