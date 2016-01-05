Rooms = new orion.collection('rooms', {
  singularName: 'room',
  pluralName: 'rooms',
  title: 'Room list',
  link: {
    title: 'Rooms'
  },
  tabular: {
    columns: [{
        data: "name",
        title: "Room name"
      }, {
        data: "hotel",
        title: "Hotel name"
      },
      orion.attributeColumn('images', 'image', 'Picture'),
    ]
  }
});

Rooms.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Room name',
  },
  mainImage: orion.attribute('image', {
    label: 'Image',
    optional: true
  }),
  otherImages: orion.attribute('images', {
    label: 'Image',
    optional: true
  }),
  description: orion.attribute('summernote', {
    label: 'Description'
  }),
  hotel: orion.attribute('hasOne', {
    label: "Hotels"
  }, {
    collection: Hotels,
    titleField: 'name',
    publicationName: 'hotelRoomConnection'
  })
}));
