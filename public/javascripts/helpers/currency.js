var accounting = require('../vendor/accounting');

Ember.Handlebars.helper('currency', function(amount) {
  return accounting.formatMoney(amount);
});

