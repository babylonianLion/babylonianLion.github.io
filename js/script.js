$(document).ready(function() 
{
    // declarations
    $menuBtn = $(".menuButton")
    $nav = $("nav")
    $icon = $(".iconBox")
    $menuLinks = $(".menu a");
    $input = $("input");

    $menuBtn.on("click", ()=> {
        $(".bar1").toggleClass("active");
        $(".bar2").toggleClass("active");
        $(".bar3").toggleClass("active");
        $nav.toggleClass("active")
        $menuLinks.toggleClass("active")
    });
    $menuBtn.on("mouseenter", () => {
        $menuBtn.addClass("hover")
    }).on("mouseleave", () => {
        $menuBtn.removeClass("hover")
    })
});