if (Hotels.find().count() === 0) {
  Hotels.insert({
    slug: 'hotel-1',
    title: 'Hotel 1'
  });
  Hotels.insert({
    slug: 'hotel-2',
    title: 'Hotel 2'
  });
  Hotels.insert({
    slug: 'hotel-3',
    title: 'Hotel 3'
  });
}

Meteor.publish('hotel', function(slug) {
  check(slug, String);
  return Hotels.find({
    slug: slug
  });
});
