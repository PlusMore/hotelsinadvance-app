HotelFacilities = new orion.collection('hotelFacilities', {
  singularName: 'facility',
  pluralName: 'facilities',
  title: 'Hotel facilities',
  link: {
    title: 'Hotel facilities'
  },
  tabular: {
    columns: [{
      data: "name",
      title: "Facility"
    }]
  }
});

HotelFacilities.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Facility',
  }
}));
