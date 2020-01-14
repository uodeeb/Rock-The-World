/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/*_________________ Project Plan_________________*/
/*

A] Build The Page Main Structure
    -- four section to be in the page
    -- navigation menu with unordered list
    -- responsive design accross different devices
B] Build The Scroll Functionality
    -- use the dataset attribute
    -- make sections collapsible
    -- hide navigation while user is not scrolling

*/

/*============================================================*/ 
/*============================================================*/ 

/*_______________  START GLOBAL VARIABLES ______________*/
// store all sections
const secs=document.getElementsByTagName("section");
// store the list 
const list=document.getElementById("navbar__list");
// store the page header
let head= document.getElementById('page__header');
// store the collapsible section
let coll = document.getElementsByClassName("collapsible");
let i;

/*_______________  END GLOBAL VARIABLES ______________*/

/*============================================================*/ 

/*_______________  START NAVIGATION FUNCTION ______________*/
// build dynamic nav menu
(()=>{
    Array.from(secs).forEach(sec=>{
        //create li elements
        let listItem=document.createElement('li');
        listItem.setAttribute('class', 'item');
            listItem.innerHTML=`<a class="menu__link" href="#${sec.dataset.nav}">${sec.querySelector("h2").textContent}</a>`;
            listItem.addEventListener('click' ,function (e) {
                //check if the section is in the viewport
            if( isInViewport(sec)){
                        sec.setAttribute('data-state', 'active-state');
                }else{
                    sec.getAttribute('data-state');
                    sec.setAttribute('data-state', '');
                }     
               });
               list.appendChild(listItem);
        });
        })();
/*_______________  END NAVIGATION FUNCTION ______________*/

/*============================================================*/ 

/*_______________  START CHECK VIEWPORT FUNCTION ______________*/
let isInViewport =
    function (section){
            // Get it's position in the viewport
            var bounding = section.getBoundingClientRect();
            // return the boolean
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            };
/*_______________  END CHECK VIEWPORT FUNCTION ______________*/

/*============================================================*/  

/*_______________  START active state FUNCTION ______________*/
let showContent=function(){
    console.log("show content is working")
for (i = 0; i < coll.length; i++) {
    // listening to the click
    console.log(coll[i])
    coll[i].addEventListener("click", function() {
    //change the state
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }});
}
}
showContent();
/*_______________  END active state  FUNCTION ______________*/

/*============================================================*/ 

/*_______________  START HIDE WHEN NO SCROLL FUNCTION ______________*/
//  hide nav menu when not scroll 
window.onscroll = function(){
    
        head.style.display= "block";
        // set the the disappearance period
    setTimeout(function(){
        head.style.display="none";   
        },20000);  
};
/*_______________  END HIDE WHEN NO SCROLL FUNCTION ______________*/

/*============================================================*/
/*_______________   START HIGHLIGHT FUNCTION _______________________*/

(()=>{
    // Add an event listener to nav items
    $(document).on('click', 'ul li', function (){
        // Add the active class
        $(this).addClass('active');
        // Remove the active class from all siblings
        $(this).siblings().removeClass('active');
    })
    $(document).on('click', 'ul li', function (){
        Array.from(coll).forEach(sec=>{
            console.log(sec);
        sec.classList.toggle("active");
    
        })
     
    })

})();
/*_______________   END HIGHLIGHT FUNCTION _______________________*/


