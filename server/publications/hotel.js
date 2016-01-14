if (Hotels.find().count() === 0) {
  Hotels.insert({
    name: 'Hotel nuu',
    slug: 'hotel-1',
    title: 'Hotel 1',
    description: 'desc'
  });
  Hotels.insert({
    name: 'Hotel nuu',
    slug: 'hotel-2',
    title: 'Hotel 2',
    description: 'desc'
  });
  Hotels.insert({
    name: 'Hotel nuu',
    slug: 'hotel-3',
    title: 'Hotel 3',
    description: 'desc'
  });
}

Meteor.publish('hotel', function(slug) {
  check(slug, String);
  return Hotels.find({
    slug: slug
  });
});
