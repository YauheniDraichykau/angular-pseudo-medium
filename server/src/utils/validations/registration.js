import { check } from 'express-validator';

export const registrationValidator = [
    check('email').isEmail(),
    check('username').isLength({ min: 3 }),
    check('password').isLength({ min: 3 })
];
