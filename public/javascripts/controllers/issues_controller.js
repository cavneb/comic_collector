var IssuesController = Ember.ArrayController.extend({
  sortProperties: ['number'],

  createIssue: function() {
    var data = {
      cover_image_url: this.get('new_cover_image_url'), 
      number: this.get('new_number'),
      price: this.get('new_price'),
      title: this.get('new_title'),
    }
    var issues = this.get('model')
    var newIssue = issues.createRecord(data);
    this.get('store').save();
  }
});

module.exports = IssuesController;

