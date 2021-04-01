$(document).ready(function () {
    $(".menu-hamburger").on('click', function () {
        $(this).find(".hambergerIcon").toggleClass("open");
        $(document).find(".ul-default").toggleClass("ul-show");
        
        // $(document).find(".ul-show").toggleClass("ul-default");
        // $(document).find(".ul-show").toggleClass("ul-default");
        $(document).find(".background-ul").toggleClass("background-ul-style");
    });
})