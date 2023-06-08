var inp = document.querySelector(".input")
var icon = document.querySelector(".icon-eye")

icon.addEventListener("mousedown" , function(){
    inp.setAttribute("type" , "text")
    icon.innerHTML = "visibility"
})
icon.addEventListener("mouseup" , function(){
    inp.setAttribute("type" , "password")
    icon.innerHTML = "visibility_off"
    })





