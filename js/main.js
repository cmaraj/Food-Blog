window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

document.getElementById('casserole-1').addEventListener('click', function (){
  console.log('cass1');
  document.querySelector('.bg-popup-cass').style.display = 'flex';
});
document.getElementById('casserole-2').addEventListener('click', function (){
  console.log('cass2');
  document.querySelector('.bg-popup-cass').style.display = 'flex';
});

document.getElementById('pan-1').addEventListener('click', function (){
  console.log('pan1');
  document.querySelector('.bg-popup-pan').style.display = 'flex';
});
document.getElementById('pan-2').addEventListener('click', function (){
  console.log('pan2');
  document.querySelector('.bg-popup-pan').style.display = 'flex';
});

document.getElementById('pot-1').addEventListener('click', function (){
  console.log('pot1');
  document.querySelector('.bg-popup-pot').style.display = 'flex';
});
document.getElementById('pot-2').addEventListener('click', function (){
  console.log('pot2');
  document.querySelector('.bg-popup-pot').style.display = 'flex';
});

document.querySelector('.closer-cass').addEventListener('click', function (){
  console.log('click closer');
  document.querySelector('.bg-popup-cass').style.display = 'none';
});

document.querySelector('.closer-pan').addEventListener('click', function (){
  console.log('click closer');
  document.querySelector('.bg-popup-pan').style.display = 'none';
});

document.querySelector('.closer-pot').addEventListener('click', function (){
  console.log('click closer');
  document.querySelector('.bg-popup-pot').style.display = 'none';
});