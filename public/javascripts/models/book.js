var Book = DS.Model.extend({
  name:            DS.attr('string'), 
  cover_image_url: DS.attr('string'),
  issues:          DS.hasMany('App.Issue', { embedded: true }),

  totalIssues: function() {
    return this.get('issues.length');
  }.property('issues.@each'),

  totalPrice: function() {
    return this.get('issues').getEach('price').reduce(function(accum, price) {
      return (Math.round(accum * 100) +  Math.round(price * 100)) / 100;
    })
  }.property('issues.@each')

});

module.exports = Book;

