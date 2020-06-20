import express from 'express';
import controller from '../http/controllers/login/login';
import validationRules from '../http/requests/login/login';
import validate from '../http/middlewares/validate';

const router = new express.Router();
const baseUrl = '/login';

router.post(baseUrl, validationRules, validate, (req, res) => {
  controller.authenticate(req, res);
});

module.exports = router;
