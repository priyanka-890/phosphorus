// java script for search bar
// function searchBar() {
//     var search = document.getElementById("search-div")
//     search.style.display = "block"
//     var nav = document.getElementsByClassName("nav-bar")
//     nav[0].style.display = "none"

// }

// var searchAnimation = document.getElementById("search")
//     // searchAnimation.addEventListener('click',searchBar)

// function closeBar() {
//     var search = document.getElementById("search-div")
//     search.style.display = "none"
//     var nav = document.getElementsByClassName("nav-bar")
//     nav[0].style.display = "flex"
// }
// var closeDiv = document.getElementById("close")
// closeDiv.addEventListener('click', closeBar)

// java script for nav-products

function productBar(index) {
    var productDetails = document.getElementsByClassName("product-div")
    var displayProp = productDetails[index].style.display
    productDetails[0].style.display = "none"
    productDetails[1].style.display = "none"
    productDetails[2].style.display = "none"
    if (displayProp == "none") {
        productDetails[index].style.display = "block"
    } else {
        productDetails[index].style.display = "none"
    }

}
var product = document.getElementById("products");
product.addEventListener('click', () => productBar(0));
var solutions = document.getElementById("solutions");
solutions.addEventListener('click', () => productBar(1));
var resources = document.getElementById("resources");
resources.addEventListener('click', () => productBar(2));


// anchor list display
var anchor1 = document.getElementById("anchor-tab1")
anchor1.addEventListener("click", openBusiness)

function openBusiness() {
    var businessDiv = document.getElementById("business-tab")
    businessDiv.style.display = "flex";
    var personalDiv = document.getElementById("personal-tab")
    personalDiv.style.display = "none"
}

var anchor2 = document.getElementById("anchor-tab2")
anchor2.addEventListener("click", openPersonal)

function openPersonal() {
    var personalDiv = document.getElementById("personal-tab")
    personalDiv.style.display = "flex";
    var businessDiv = document.getElementById("business-tab")
    businessDiv.style.display = "none"
}