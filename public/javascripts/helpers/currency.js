Accounting = require('../vendor/accounting');

Ember.Handlebars.helper('currency', function(amount) {
  return Accounting.formatMoney(amount);
});

