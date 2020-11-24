// java script for search bar
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

var tabOpens= [false,false,false]
// java script for products

function productBar(index){
    var productDetails=document.getElementsByClassName("product-div")
    var displayProp = productDetails[index].style.display
    productDetails[0].style.display="none"
    productDetails[1].style.display="none"
    productDetails[2].style.display="none"
    if(displayProp == "none"){
    productDetails[index].style.display="block"
    }else{
        productDetails[index].style.display="none"
    }
    
}
var product=document.getElementById("products");
product.addEventListener('click',()=>productBar(0));
var solutions=document.getElementById("solutions");
solutions.addEventListener('click',()=>productBar(1));
var resources=document.getElementById("resources");
resources.addEventListener('click',()=>productBar(2));


//  moving direction 

var array=["Do people like attending my events","Are my customers actually satisfied","Will my product be a successf or a flop","Are my employees happy at work"];
 var startIndex=0;
 var moveDirection=1
var change=setInterval(changeText,50);

function changeText(){
    var content=document.getElementById("change-content")
    if (content.textContent.length==0){
        moveDirection=1
        if(startIndex==3){
            startIndex=0
        }else{
        startIndex++
        }
    }
    else if(content.textContent.length==array[startIndex].length){
        moveDirection=-1
        
    }
    var length=content.textContent.length
    content.textContent=array[startIndex].substring(0,length+moveDirection)

}


