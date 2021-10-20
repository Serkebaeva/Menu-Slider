const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

/* //////////PERVYI METOD - ANONIMNAYA FUNCTION//////////
toggle.addEventListener('click', function(){
	document.body.classList.toggle('show-nav');
});*/

/* /////// VTOROY METOD ////////////
function showNav() {
	document.body.classList.toggle('show-nav');
}
toggle.addEventListener('click', showNav);*/

/*/////// TRETIY METOD ////////////*/
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);
