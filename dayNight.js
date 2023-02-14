 // DayNight Switch 
 const inputEl=document.querySelector(".input")
 const bodyEl=document.querySelector("body")
 
 inputEl.checked=JSON.parse(localStorage.getItem("mode"));
 // update body will run as soon as the website gets reloded 
 updateBody();
 
 function updateBody(){
     if (inputEl.checked){
         bodyEl.style.background="#000000";
     }else{
         bodyEl.style.background="#303049";
     }
 }
 // Eventlistener will trigger every time toggle button is clicked and it also saves the input to local storage of browser
 inputEl.addEventListener("input",()=>{
     updateBody();
     updateLocalStorage();
 });
 
 function updateLocalStorage(){
     localStorage.setItem("mode",JSON.stringify(inputEl.checked));
 }