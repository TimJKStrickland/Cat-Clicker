var cats = [
  {
    name: 'Mew',
    url: 'http://images2.fanpop.com/image/photos/13400000/Cat-cats-13494223-2304-1728.jpg',
    catClicks: 0
  },
  {
    name: 'Mewtwo',
    url: 'https://sickr.files.wordpress.com/2011/09/mewtwo.jpg',
    catClicks: 0
  }
];
for(var i=0; i<cats.length; i++){
$('.cats').append('<li>' + cats[i].name + '</li>')
$('.catDisplay').append('<img src="' + cats[i].url + '" width= "200px">');
};
