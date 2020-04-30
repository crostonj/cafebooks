var express = require('express');
var bookRouter = express.Router();

var router = function () {
  var bookContoller = require('../Controllers/BookController')();
  bookRouter.use(bookContoller.middleware);
  //Secure all routes

  bookRouter.route('/')
      .get(bookContoller.get);

  bookRouter.route('/:id')
      .get(bookContoller.getByAuthor);

  return bookRouter;

};

/* GET users listing. */

module.exports = router;
