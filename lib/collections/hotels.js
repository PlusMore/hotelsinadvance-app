Hotels = new orion.collection('hotels', {
  singularName: 'hotel',
  pluralName: 'hotels',
  title: 'Hotel list',
  link: {
    title: 'Hotels'
  },
  tabular: {
    columns: [{
        data: "name",
        title: "Hotel name"
      },
      orion.attributeColumn('image', 'image', 'Pictures'),
    ]
  }
});

Hotels.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Hotel name',
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
  area: orion.attribute('hasOne', {
    label: "Areas",
    optional: true
  }, {
    collection: Areas,
    titleField: 'name',
    publicationName: 'hotelAreaConnection'
  }),
  facility: orion.attribute('hasMany', {
    label: "Facilities",
    optional: true
  }, {
    collection: HotelFacilities,
    titleField: 'name',
    publicationName: 'hotelFacilitiesConnection'
  })
}));
