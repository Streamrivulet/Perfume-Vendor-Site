var slides = document.querySelector('.slider2_items').children;
var nextSlide = document.querySelector('.right_slide');
var prevSlide = document.querySelector('.left_slide');
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick=function()
{
    next("next");
}

prevSlide.onclick=function()
{
    next("prev");
}

function next(direction)
{
    if(direction == next)
    {
        index++;
        if(index==totalSlides)
        {
            index=0;
        }
    }

    else
    {
        if(index==0)
        {
            index = totalSlides - 1;
        }
        else
        {
            index--;
        }
    }

    for(i=0; i<totalSlides; i++)
    {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

var menu_wrapper = document.getElementById("media_menu");
var menus = menu_wrapper.getElementsByTagName("li");
for (var i = 0; i < menus.length; i++)
{
    menus[i].addEventListener("click", function()
    {
        var current=document.querySelector(".active");
            current.classList.remove("active");
            this.classList.add("active");
    })
}

var menu_icon = document.getElementById("hamburger_menu");
menu_icon.addEventListener("click", function ()
{
    var menu_item_wrapper = document.getElementById("media_menu");
    menu_item_wrapper.classList.toggle("display");
});