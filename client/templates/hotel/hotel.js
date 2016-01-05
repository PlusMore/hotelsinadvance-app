Template.hotel.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('hotel', FlowRouter.getParam('slug'));
  });
});

Template.hotel.helpers({
  hotel: function() {
    return Hotels.findOne({
      slug: FlowRouter.getParam('slug')
    });
  }
});
