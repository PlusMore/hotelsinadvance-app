Template.hotel.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('hotel', FlowRouter.getParam('slug'));
  });

  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });


});

Template.hotel.helpers({
  hotel: function() {
    return Hotels.findOne({
      slug: FlowRouter.getParam('slug')
    });
  }
});

Template.hotel.onRendered(function() {
  GoogleMaps.load();
});

Template.hotel.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(40.719882, -74.000158),
        zoom: 16,
        scrollwheel: false
      };
    }
  }
});



/*
$('#checkin,#checkout').datepicker({
  isRTL: false,
  format: 'dd/mm/yyyy',
  autoclose: true
});

$('.smallImg').on('click', function() {
  var imageName = $(this).data("img");
  $('.largeImg').html('<img src="img/' + imageName + '.jpg">');
});
*/
