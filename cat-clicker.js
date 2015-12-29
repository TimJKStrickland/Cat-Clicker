var $cat1 = document.getElementById('#cat1');
var $cat2 = document.getElementById('#cat2');
$cat1.style.background("url:'./img/cat1.jpg'");
$cat2.style.background("url:'./img/cat2.jpg'");
var cat1count = 0;

$(cat1).click(function(){
  $cat1count++;
});
$(cat2).click(function(){
  $cat2count++;
});

