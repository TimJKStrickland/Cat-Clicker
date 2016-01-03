// Model
var model = {
  currentCat: null,
  cats: [
    {
      name: 'Mew',
      url: 'http://images2.fanpop.com/image/photos/13400000/Cat-cats-13494223-2304-1728.jpg',
      catClicks: 0
    },
    {
      name: 'Mewtwo',
      url: 'https://sickr.files.wordpress.com/2011/09/mewtwo.jpg',
      catClicks: 0
    },
    {
      name: "Fluffers",
      url: 'img/cat1.jpg',
      catClicks: 0
    },
    {
      name: "meowington",
      url: 'img/cat2.jpeg',
      catClicks: 0
    },
    {
      name: "Jephers",
      url: 'img/cat3.jpeg',
      catClicks: 0
    },
    {
      name: "Zephyr",
      url: 'img/cat4.jpeg',
      catClicks: 0
    },
    {
      name: "Hephaestus",
      url: 'img/cat5.jpeg',
      catClicks: 0
    }
  ]
};
// Octopus
var octopus = {
  init: function(){
    // this sets the currentCat view to the first in array
    model.currentCat = model.cats[0];
    // tells our view to initialize..what does initialize mean?
    catListView.init();
    catView.init();
  },
  getCurrentCat: function(){
    return model.currentCat;

  },
  getCats: function(){
    return model.cats;
  },
  // sets current cat to display
  setCurrentCat: function(cat){
    model.currentCat = cat;
  },
  // increases clickCount
  incrementCounter: function(){
    model.currentCat.catClicks++;
    catView.render();
  }
};

// view

var catView = {
  init: function(){
    // stores pointers to DOM elements for cached access later
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-image');
    this.countElem = document.getElementById('cat-count');
    // increments the count of catClicks
    this.catImageElem.addEventListener('click', function(){
      octopus.incrementCounter();
    });
    // renders the view (update the DOM with correct values)
      this.render();
  },
  render: function(){
    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.catClicks;
    this.catImageElem.src = currentCat.url;
    this.catNameElem.textContent = currentCat.name;
  }

};
var catListView = {
  init: function(){
    // stores to the DOM for easy access later
    this.catListElem = document.getElementById('cat-list');

    // renders the list view
    this.render();
  },
  render: function(){
    var cat, elem, i;
    // get the cats via octopus to display
    var cats = octopus.getCats();
    // empties the list of any precursory cats
    this.catListElem.innerHTML = '';
    // need to loop over the cats to get them into the
    // view
    for (var i = 0; i < cats.length; i++) {
      cat = cats[i];
      elem = document.createElement('li');
      elem.textContent = cat.name;

      elem.addEventListener('click', (function(catCopy){
        // necessary closure
        return function(){
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat));
      this.catListElem.appendChild(elem);
    }
  }
};

octopus.init();
