import { check } from 'express-validator';

export const loginValidator = [
    check('email').isEmail(),
    check('password').isLength({ min: 3 })
];
