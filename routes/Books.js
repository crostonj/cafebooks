const goodreads = require('goodreads-api-node');

var express = require('express');
var router = express.Router();

var router = function (nav) {
  var bookContoller = require('../controllers/bookController')();
  bookRouter.use(bookContoller.middleware);
  //Secure all routes

  bookRouter.route('/')
      .get(bookContoller.getIndex);

  bookRouter.route('/:name')
      .get(bookContoller.getById);

  return bookRouter;

};

/* GET users listing. */

module.exports = router;
