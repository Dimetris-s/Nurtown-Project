const navigationLinks=document.querySelectorAll(".menu__item");function testWebP(e){var t=new Image;t.onload=t.onerror=function(){e(2==t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}navigationLinks.forEach(e=>{e.addEventListener("click",t=>{e.classList.contains("active")&&t.preventDefault()})}),testWebP((function(e){1==e?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")}));