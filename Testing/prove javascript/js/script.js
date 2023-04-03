let headerNav = document.getElementById("header-main");
let responsiveMainAside = document.getElementById("content");
let clientWidth = document.documentElement.clientWidth;
let contentMain = document.getElementById("main")
let article = document.getElementById("experiences")
let allArticles = document.getElementsByClassName("job");/**/
let asideContent = document.getElementById("aside")

/**/
headerNav.innerHTML = "<h1>Alessandro Rondolini</h1>";
responsiveMainAside.style.display = "flex";



if (clientWidth <= 500) {
    responsiveMainAside.style.flexDirection = "column";
    asideContent.style.borderTop = "white inset 2px"
} else {
    responsiveMainAside.style.flexDirection = "row";
    asideContent.style.borderLeft = "white inset 2px"
}
if (clientWidth <= 500) {
    /* allArticles.style.display = "block"; --NON ME LO FA IMPOSTARE-- */ 
    article.style.flexDirection = "column";
    article.style.alignItems = "center";
    /* allArticles.style.paddingBottom = "50%" --NON ME LO FA IMPOSTARE-- */
} else {
    article.style.flexDirection = "row";
}



