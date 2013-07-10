var Issue = DS.Model.extend({
  number:          DS.attr('number'),
  title:           DS.attr('string'), 
  cover_image_url: DS.attr('string'), 
  price:           DS.attr('number'),
  book:            DS.belongsTo('App.Book')
});

module.exports = Issue;

