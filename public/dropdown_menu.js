$(document).ready(function () {
    $(".hoverli1").hover(
        function () {
            $('ul.file_menu1').slideDown('medium');
        },
        function () {
            $('ul.file_menu1').slideUp('medium');
        }
    );
});

$(document).ready(function () {
    $(".hoverli2").hover(
        function () {
            $('ul.file_menu2').slideDown('medium');
        },
        function () {
            $('ul.file_menu2').slideUp('medium');
        }
    );
//
//    $(".file_menu li").hover(
//        function () {
//            $(this).children("ul").slideDown('medium');
//        },
//        function () {
//            $(this).children("ul").slideUp('medium');
//        }
//    );
});
