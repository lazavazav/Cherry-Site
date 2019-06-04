//get modal1 element for menu
var modal = document.getElementById("menuModal");

//get modal button
var menuLink = document.getElementById("menubtn");

//get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//listen for click event
menuLink.addEventListener("click", openModal); 
//listen for click event
closeBtn.addEventListener("click", closeModal);

//function to open Modal
  function openModal() {
    modal.style.display = "block";
  }

//function to close modal
  function closeModal() {
    modal.style.display = "none";
  }


//get modal element for about
var modal2 = document.getElementById("aboutModal");

//get modal button
var aboutLink = document.getElementById("aboutbtn");

//get close button
var closeBtn = document.getElementsByClassName("closeBtn")[1];

//listen for click event
aboutLink.addEventListener("click", openModal2); 
//listen for click event
closeBtn.addEventListener("click", closeModal2);

// function to open Modal
  function openModal2() {
    modal2.style.display = "block";
  }

//function to close modal
  function closeModal2() {
    modal2.style.display = "none";
  }


//get modal element for map
var modal3 = document.getElementById("mapModal");

//get modal button
var mapLink = document.getElementById("mapbtn");

//get close button
var closeBtn = document.getElementsByClassName("closeBtn")[2];

//listen for click event
mapLink.addEventListener("click", openModal3); 
//listen for click event
closeBtn.addEventListener("click", closeModal3);

//function to open Modal
  function openModal3() {
    modal3.style.display = "block";
  }

//function to close modal
  function closeModal3() {
    modal3.style.display = "none";
  }


//get modal element for contact
var modal4 = document.getElementById("contactModal");

//get modal button
var contactLink = document.getElementById("contactbtn");

//get close button
var closeBtn = document.getElementsByClassName("closeBtn")[3];

//listen for click event
contactLink.addEventListener("click", openModal4); 
//listen for click event
closeBtn.addEventListener("click", closeModal4);

//function to open Modal
  function openModal4() {
    modal4.style.display = "block";
  }

//function to close modal
  function closeModal4() {
    modal4.style.display = "none";
  }