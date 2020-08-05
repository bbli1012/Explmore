const db = require('./index.js');
const Sparks = require('./Sparks.js');

const mongoose = require('mongoose');

let data = [];

let sample = {
  title: "Title",
  image: "imageUrl",
  views: 0,
  type: "scene",
  geo: {
    latitude: 124,
    longitude: 324,
    heading: 0
  },
  target: {
    latitude: 0,
    longitude: 0,
    heading: 0
  }
};

let sample1 = {
  id: 1,
  title: "City Skies",
  image: "https://www.findingtheuniverse.com/wp-content/uploads/2015/10/wells252520fargo252520bank252520san252520francisco_by_Laurence252520Norah25255B725255D.jpg",
  views: 100,
  type: "scene",
  geo: {
    latitude: 37.794116,
    longitude: -122.400141,
    heading: 0
  },
  target: {
    latitude: 0,
    longitude: 0,
    heading: 0
  }
};

let sample2 = {
  id: 2,
  title: "Pointy",
  image: "https://www.findingtheuniverse.com/wp-content/uploads/2015/10/san252520francisco252520pyramiid252520building252520225255B325255D.jpg",
  views: 20,
  type: "scene",
  geo: {
    latitude: 37.794655,
    longitude: -122.403178,
    heading: 0
  },
  target: {
    latitude: 0,
    longitude: 0,
    heading: 0
  }
};

let sample3 = {
  id: 3,
  title: "Golden Arches",
  image: "https://www.findingtheuniverse.com/wp-content/uploads/2015/10/Vista252520Point252520San252520Francisco252520Golden252520Gate252520Bridge_by_Laurence252520Norah-225255B325255D.jpg",
  views: 40,
  type: "scene",
  geo: {
    latitude: 37.808012,
    longitude: -122.476951,
    heading: 0
  },
  target: {
    latitude: 0,
    longitude: 0,
    heading: 0
  }
};

let sample4 = {
  id: 4,
  title: "Gold on Gold",
  image: "https://www.findingtheuniverse.com/wp-content/uploads/2015/10/Bakers252520Beach252520SF252520VEO_by_Laurence252520Norah25255B725255D.jpg",
  views: 30,
  type: "scene",
  geo: {
    latitude: 37.798390,
    longitude: -122.481887,
    heading: 0
  },
  target: {
    latitude: 0,
    longitude: 0,
    heading: 0
  }
};

let sample5 = {
  id: 5,
  title: "$kyline",
  image: "https://www.findingtheuniverse.com/wp-content/uploads/2015/10/San252520Francisco252520view252520from252520Corona252520Heights_by_Laurence252520Norah-225255B325255D.jpg",
  views: 50,
  type: "scene",
  geo: {
    latitude: 37.765523,
    longitude: -122.439244,
    heading: 0
  },
  target: {
    latitude: 0,
    longitude: 0,
    heading: 0
  }
};

let sample6 = {
  id: 6,
  title: "@Pier7",
  image: "https://www.findingtheuniverse.com/wp-content/uploads/2015/10/Pier2525207252520San252520Francisco252520California252520VEO_by_Laurence252520Norah-225255B725255D.jpg",
  views: 40,
  type: "scene",
  geo: {
    latitude: 37.799417,
    longitude: -122.395520,
    heading: 0
  },
  target: {
    latitude: 37.795203,
    longitude: -122.402941,
    heading: 0
  }
};

let sample7 = {
  id: 7,
  title: "Alcatraz",
  image: "https://www.findingtheuniverse.com/wp-content/uploads/2015/10/View252520of252520Alcatraz252520from252520Pier25252039252520San252520Francisco_by_Laurence252520Norah-225255B325255D.jpg",
  views: 50,
  type: "scene",
  geo: {
    latitude: 37.811305,
    longitude: 122.410490,
    heading: 0
  },
  target: {
    latitude: 37.826197,
    longitude: -122.422404,
    heading: 0
  }
};

let sample8 = {
  id: 9,
  title: "History in Color",
  image: "https://www.findingtheuniverse.com/wp-content/uploads/2015/10/Trams252520on252520Powell252520Street252520San252520Francisco_by_Laurence252520Norah25255B325255D.jpg",
  views: 70,
  type: "scene",
  geo: {
    latitude: 37.805152,
    longitude: -122.415179,
    heading: 0
  },
  target: {
    latitude: 0,
    longitude: 0,
    heading: 0
  }
};

// data.push(sample);
data.push(sample1);
data.push(sample2);
data.push(sample3);
data.push(sample4);
data.push(sample5);
data.push(sample6);
data.push(sample7);
data.push(sample8);

// let data = require('../sampleData.js');

for (var i = 0; i < data.length; i++) {
  let entry = data[i];
  Sparks.create(entry);
}
