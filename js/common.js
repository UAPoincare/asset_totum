

!function (e, t, n) {
   "use strict";
    var r = e.querySelectorAll(".menu"), a = function (e, t) {
    var n = t.getAttribute("aria-hidden");
    "false" == n ? (e.setAttribute("aria-expanded", "false"),
                    t.setAttribute("aria-hidden", "true") ) :
                   (e.setAttribute("aria-expanded", "true"),
                    t.setAttribute("aria-hidden", "false")
                    );
    };
    [].forEach.call(r, function (e, t) {
    var n = e.nextElementSibling;
            e.setAttribute("aria-expanded", "false"),
            e.setAttribute("aria-controls", "button-menu-" + t),
            n.setAttribute("aria-hidden", "true"),
            n.setAttribute("aria-labelledby", "content-menu-" + t),
            n.setAttribute("tabindex", "0"),
        e.addEventListener("click", function () {
            return a(this, n), !1;
        }, !1), e.addEventListener("keydown", function (e) {
            32 === e.which && (e.preventDefault(), a(this, n));
        }, !1);
    });
}(document, window);

$(document).ready( function() {
    $(".file-upload input[type=file]").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#filename").val(filename);
    });
});
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "date-uk-pre": function ( a ) {
        if (a == null || a == "") {
            return 0;
        }
        var ukDatea = a.split('/');
        return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
    },

    "date-uk-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },

    "date-uk-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
} );

$(document).ready(function() {
    $('#example').DataTable({
        "bSort": false,
        "oLanguage": {
            "oPaginate": {
            "sFirst": "First page", // This is the link to the first page
            "sPrevious": "Previous page", // This is the link to the previous page
            "sNext": "Load more", // This is the link to the next page
            "sLast": "Last page" // This is the link to the last page
            }
        }
    } );
} );

$(document).ready(function() {
    $(".tab_item").not(":first").hide();
    $(".change_balance_tab_wrapper .tab").click(function() {
        $(".change_balance_tab_wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
} );

$(document).ready(function() {
    var carousel = $("#carousel");
    carousel.owlCarousel({
        items: 6,
    });
    $('#js-prev').click(function () {
        carousel.trigger('owl.prev');
        return false;
        });

    $('#js-next').click(function () {
        carousel.trigger('owl.next');

        return false;
    });
} );



