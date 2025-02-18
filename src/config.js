const sizeLookup = {
   1: 500000,
   2: 200000,
   3: 100000,
   4: 50000,
   5: 25000,
   6: 12500,
   7: 6250,
   8: 3000,
   9: 1200,
   10: 600,
   11: 400,
   12: 200,
   13: 100,
   14: 80,
   15: 40,
   16: 20,
   17: 10,
   18: 5,
   19: 5,
   20: 5
}

const mapViews = [{
      longitude: -122.35021467990396,
      latitude: 47.623954436942995,
      zoom: 15, //8
      pitch: 60,
      bearing: -20,
      name: 'Seattle, WA'
   },
   {
      longitude: 13.404954,
      latitude: 52.520008,
      zoom: 10,
      pitch: 60,
      bearing: 0,
      name: 'Berlin, Germany'
   },
   {
      longitude: -122.41251212803706,
      latitude: 37.77116905512072,
      zoom: 8,
      pitch: 20,
      bearing: 0,
      name: 'San Francisco, CA'
   },
   {
      longitude: -117.19453161713136,
      latitude: 32.7459306899641,
      zoom: 8,
      pitch: 20,
      bearing: 0,
      name: 'San Diego, CA'
   },
   {
      longitude: -87.65142984345374,
      latitude: 41.87225195677442,
      zoom: 10,
      pitch: 20,
      bearing: 0,
      name: 'Chicago, IL'
   },
   {
      longitude: -66.06411721833007,
      latitude: 18.465526764926423,
      zoom: 11,
      pitch: 20,
      bearing: 0,
      name: 'San Juan, PR'
   },
   {
      longitude: -83.03440701349251,
      latitude: 42.34305805549184,
      zoom: 8,
      pitch: 20,
      bearing: 0,
      name: 'Detroit, MI'
   },
   {
      longitude: 28.979530,
      latitude: 41.015137,
      zoom: 10,
      pitch: 20,
      bearing: 0,
      name: 'Istanbul, Turkey'
   },
   {
      longitude: 4.899431,
      latitude: 52.379189,
      zoom: 10,
      pitch: 20,
      bearing: 0,
      name: 'Amsterdam, Netherlands'
   }
]

const providers = [{
      name: 'uber',
      color: '#276EF1',
      color2: [39, 110, 241, 200],
      modes: ['car'],
      active: true
   },
   {
      name: 'jump',
      color: '#E73A14',
      color2: [231, 58, 20, 200],
      modes: ['bike', 'scooter'],
      active: true
   },
   {
      name: 'lime',
      color: '#25CF00',
      color2: [37, 207, 0, 200],
      modes: ['bike', 'scooter'],
      active: true
   },
   {
      name: 'lyft',
      color: '#FE00D8',
      color2: [254, 0, 126, 200],
      modes: ['car'],
      active: true
   },
];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export {
   sizeLookup,
   mapViews,
   providers,
   months
};
