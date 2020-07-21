$(document).ready(function() {
    $("#tablist li").each(function(index) {
        $(this).click(function() {
            $(".contentin").removeClass("contentin");
            $(".tabin").removeClass("tabin");
            $(".content-box div").eq(index).addClass("contentin");
            $(this).addClass("tabin")
        });
    })
    $("#price li").each(function() {
        $(this).click(function() {
            // $(".contentin").removeClass("contentin");
            $(".active").removeClass("active");
            // $(".content-box div").eq(index).addClass("contentin");
            $(this).addClass("active")
        });
    })
})
$(function() {
    
})