var Book = require('../models/book');

var BookRoute = Ember.Route.extend({
  model: function(params) {
    return Book.find(params.book_id);
  }
});

module.exports = BookRoute;

