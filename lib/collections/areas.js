Areas = new orion.collection('areas', {
  singularName: 'area',
  pluralName: 'areas',
  title: 'Area list',
  link: {
    title: 'Areas'
  },
  tabular: {
    columns: [{
      data: "name",
      title: "Area name"
    }]
  }
});

Areas.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Area name',
  }
}));
