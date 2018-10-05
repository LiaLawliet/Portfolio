let toggle = document.querySelectorAll(".toggle")[0];
let nav = document.querySelectorAll("nav")[0];
let toggle_open_text = 'Menu';
let toggle_close_text = 'Acceuil';

toggle.addEventListener('mouseenter', function() {
	nav.classList.add('open');
	
  if (nav.classList.contains('open')) {
    toggle.innerHTML = toggle_close_text;
  } else {
    toggle.innerHTML = toggle_open_text;
  }
}, false);

nav.addEventListener('mouseleave', function() {
	nav.classList.remove('open');
	
  if (nav.classList.contains('open')) {
    toggle.innerHTML = toggle_close_text;
  } else {
    toggle.innerHTML = toggle_open_text;
  }
}, false);

setTimeout(function(){
	nav.classList.toggle('open');	
}, 1000);