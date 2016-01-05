Meteor.startup(function() {
  // Insert sample data if the student collection is empty
  if (Areas.find().count() === 0) {

    var areaListImport = [{
      "name": "Manhattan"
    }, {
      "name": "Midtown 420"
    }, {
      "name": "New York City Center"
    }, {
      "name": "East Side"
    }, {
      "name": "Lower Manhattan"
    }, {
      "name": "West Side"
    }, {
      "name": "Midtown West"
    }, {
      "name": "Theater District"
    }, {
      "name": "Midtown East"
    }, {
      "name": "New York Central Park"
    }, {
      "name": "Times Square"
    }, {
      "name": "Harlem"
    }, {
      "name": "Upper West Side"
    }, {
      "name": "Wall Street - Financial District"
    }, {
      "name": "Chelsea"
    }, {
      "name": "Bowery"
    }, {
      "name": "East Village"
    }, {
      "name": "Murray Hill"
    }, {
      "name": "Garment District"
    }, {
      "name": "Lower East Side"
    }, {
      "name": "Upper East Side"
    }, {
      "name": "Kips Bay"
    }, {
      "name": "SoHo"
    }, {
      "name": "Chinatown"
    }, {
      "name": "Greenwich Village"
    }, {
      "name": "NoMad"
    }, {
      "name": "Union Square"
    }, {
      "name": "Meatpacking District"
    }, {
      "name": "Alphabet City"
    }, {
      "name": "East Harlem"
    }, {
      "name": "Rockefeller Center"
    }, {
      "name": "Tribeca"
    }, {
      "name": "Washington Heights"
    }, {
      "name": "Fifth Avenue"
    }, {
      "name": "Flatiron District"
    }, {
      "name": "Gramercy"
    }, {
      "name": "Grand Central Station"
    }, {
      "name": "Koreatown"
    }, {
      "name": "Little Italy"
    }, {
      "name": "Battery Park"
    }, {
      "name": "NoLita"
    }, {
      "name": "Herald Square"
    }, {
      "name": "Morningside Heights"
    }];

    areaListImport.forEach(function(doc) {
      Areas.insert(doc);
    });

  }

  if (HotelFacilities.find().count() === 0) {

    var facilitiesList = [{
      "name": "Wi-Fi"
    }, {
      "name": "Parking"
    }, {
      "name": "Airport Shuttle"
    }, {
      "name": "Fitness Center"
    }, {
      "name": "Non-smoking Rooms"
    }, {
      "name": "Indoor Pool"
    }, {
      "name": "Spa"
    }, {
      "name": "Family Rooms"
    }, {
      "name": "Outdoor Pool"
    }, {
      "name": "Pet Friendly"
    }, {
      "name": "Facilities for Disabled Guests"
    }, {
      "name": "Restaurant"
    }];

    facilitiesList.forEach(function(doc) {
      HotelFacilities.insert(doc);
    });
  }



});
