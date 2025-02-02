/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function openCloseNav(){
    var w_open = "250px"
    var w_close = "50px"
  
    var mySidebar = document.getElementById("mySidebar").style.width;
    var  main = document.getElementById("main").style.marginLeft;
  
    if(mySidebar === w_open){
      document.getElementById("mySidebar").style.width = w_close;
      document.getElementById("main").style.marginLeft = w_close;
    }else{
      document.getElementById("mySidebar").style.width = w_open;
      document.getElementById("main").style.marginLeft = w_open;
    }
  }
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "50px";
    document.getElementById("main").style.marginLeft= "50px";
  }