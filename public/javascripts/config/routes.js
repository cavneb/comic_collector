var App = require('./app');

App.Router.map(function() {
  this.resource('books', { path: '/' });
  this.resource('book', { path: '/:book_id' });
});

