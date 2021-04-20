$(document).ready(() => {
    $('#portfolio-button').click(()=> {
        $('.mainContent').css("display","none");
        $('#portfolio').css("display","inline-block");
    });
    $('#help-button').click(()=> {
        $('.mainContent').css("display","none");
        $('#help').css("display","inline-block");
    });
    $('#approach-button').click(()=> {
        $('.mainContent').css("display","none");
        $('#approach').css("display","inline-block");
    });
    $('#blog-button').click(()=> {
        $('.mainContent').css("display","none");
        $('#blog').css("display","inline-block");
    });
    $('#about-button').click(()=> {
        $('.mainContent').css("display","none");
        $('#about').css("display","inline-block");
    });
});