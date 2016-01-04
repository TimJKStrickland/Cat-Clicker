// Model
var model = {
  adminViewState: false,
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
/*------------/ Octopus------------*/
var octopus = {
  init: function(){
    // this sets the currentCat view to the first in array
    model.currentCat = model.cats[0];
    // tells our view to initialize..what does initialize mean?
    catListView.init();
    catView.init();
    adminView.init();
  },
  getCurrentCat: function(){
    return model.currentCat;
  },
  getAdminView: function(){
      return model.adminView;
  },
  setAdminView: function(newView){
    return newView = model.setAdminView;
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
  },
  updateCat: function(newCat){
      model.currentCat.name = newCat.name;
      model.currentCat.url = newCat.url;
      model.currentCat.catClicks = newCat.catClicks;
    }
};

// view
var adminView = {
  init: function(){
      this.adminElem = document.getElementById('admin');
      this.adminNamElem = document.getElementById('admin-catName');
      this.adminClickElem = document.getElementById('admin-clicks');
      this.adminUrlElem = document.getElementById('admin-url');
      this.adminCancelElem = document.getElementById('admin-cancel');
      this.adminSubmitElem = document.getElementById('admin-submit');
// admin button to get the the inputs to show up.
      this.adminElem.addEventListener('click', function(){
        adminView.toggleAdminViewState();
      });
      // submit form
      this.adminSubmitElem.addEventListener('submit', function(e){
        e.preventDefault();
        adminView.handleFormSave();
      });
      this.admin-cancel.addEventListener('cancel', function(e){
        e.preventDefault();
        adminView.toggleAdminViewState();
      });
      // input form to make sure that a thing does the thing it needs to
      this.render();
  },
  render: function(){
    var currentCat = octopus.getCurrentCat();
    this.adminNamElem.textContent = newCat.name;
    this.adminUrlElem.textContent = newCat.url;
    this.adminClickElem.textContent = newCat.catClicks;
  },
  toggleAdminViewState: function() {
    octopus.setAdminView(!octopus.getAdminView);
    var state = octopus.getAdminView();
    if(!state){
      this.admin.textContent = 'Show Admin Value';
      this.adminView.classList.add('hide');
    } else {
      this.admin.textContent = "Hide Admin View";
      this.adminView.classList.remove('hide');
    }
  }
};
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
  },
  handleFormSave: function(){
      var nameEl = document.getElementById('admin-catName');
      var imgEl = document.getElementById('admin-url');
      var countEl = document.getElementById('admin-clicks');
      newCat = {};
      // update the currentCat model
      newCat.name = nameEl.value;
      newCat.url = imgEl.value;
      newCat.caClicks = countEl.value;

      octopus.updateCat(newCat);

      // re-render sections
      catListView.render();
      catView.render();
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
