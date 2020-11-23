function searchBar(){
var search= document.getElementById("search-div")
search.style.display="block"
var nav=document.getElementsByClassName("nav-bar")
nav[0].style.display="none"
 
}

var searchAnimation= document.getElementById("search")
searchAnimation.addEventListener('click',searchBar)

function closeBar(){
    var search= document.getElementById("search-div")
search.style.display="none"
var nav=document.getElementsByClassName("nav-bar")
nav[0].style.display="flex"
}
var closeDiv= document.getElementById("close")
closeDiv.addEventListener('click',closeBar)
