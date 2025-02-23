// Função para alternar o accordion
function toggleAccordion(menuName) {
  var accordionBtn = document.querySelector('.accordion-btn');
  var accordionContent = document.querySelector('.accordion-content');

  // Fecha todos os outros accordions
  var allAccordionBtns = document.querySelectorAll('.accordion-btn');
  var allAccordionContents = document.querySelectorAll('.accordion-content');
  allAccordionBtns.forEach(function(btn) {
    if (btn !== accordionBtn) {
      btn.classList.remove('active');
    }
  });
  allAccordionContents.forEach(function(content) {
    if (content !== accordionContent) {
      content.classList.remove('active');
    }
  });

  // Alterna o accordion clicado
  accordionBtn.classList.toggle('active');
  accordionContent.classList.toggle('active');
}

// // Função para alternar o accordion
// function toggleAccordion(menuName) {
//   var accordionBtn = document.querySelector('.accordion-btn');
//   var accordionContent = document.querySelector('.accordion-content');

//   // Fecha todos os outros accordions
//   var allAccordionBtns = document.querySelectorAll('.accordion-btn');
//   var allAccordionContents = document.querySelectorAll('.accordion-content');
//   allAccordionBtns.forEach(function(btn) {
//     if (btn !== accordionBtn) {
//       btn.classList.remove('active');
//     }
//   });
//   allAccordionContents.forEach(function(content) {
//     if (content !== accordionContent) {
//       content.classList.remove('active');
//     }
//   });

//   // Alterna o accordion clicado
//   accordionBtn.classList.toggle('active');
//   accordionContent.classList.toggle('active');
// }

// Função para abrir/fechar o menu lateral
function openCloseNav() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");

  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    sidebar.style.width = "50px";
    main.style.marginLeft = "50px";
  } else {
    sidebar.classList.add("open");
    sidebar.style.width = "250px";
    main.style.marginLeft = "250px";
  }
}

// // Função para abrir/fechar o menu lateral
// function openCloseNav() {
//   var w_open = "250px";
//   var w_close = "50px";

//   var mySidebar = document.getElementById("mySidebar").style.width;
//   var main = document.getElementById("main").style.marginLeft;

//   if (mySidebar === w_open) {
//     document.getElementById("mySidebar").style.width = w_close;
//     document.getElementById("main").style.marginLeft = w_close;
//   } else {
//     document.getElementById("mySidebar").style.width = w_open;
//     document.getElementById("main").style.marginLeft = w_open;
//   }
// }

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "50px";
  document.getElementById("main").style.marginLeft = "50px";
}
// ========================================

// /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }

// function openCloseNav(){
//     var w_open = "250px"
//     var w_close = "50px"
  
//     var mySidebar = document.getElementById("mySidebar").style.width;
//     var  main = document.getElementById("main").style.marginLeft;
  
//     if(mySidebar === w_open){
//       document.getElementById("mySidebar").style.width = w_close;
//       document.getElementById("main").style.marginLeft = w_close;
//     }else{
//       document.getElementById("mySidebar").style.width = w_open;
//       document.getElementById("main").style.marginLeft = w_open;
//     }
//   }
  
//   function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidebar").style.width = "50px";
//     document.getElementById("main").style.marginLeft= "50px";
//   }