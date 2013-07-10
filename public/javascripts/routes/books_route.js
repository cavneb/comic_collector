var Book = require('../models/book');

var BooksRoute = Ember.Route.extend({
  model: function() {
    return Book.find();
  }
});

module.exports = BooksRoute;

