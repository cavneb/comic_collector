// require other, dependencies here, ie:
// require('./vendor/moment');

require('../vendor/jquery');
require('../vendor/handlebars');
require('../vendor/ember');
require('../vendor/ember-data-latest');

var App = window.App = Ember.Application.create({ LOG_TRANSITIONS: true });
App.Store = require('./store');

module.exports = App;

