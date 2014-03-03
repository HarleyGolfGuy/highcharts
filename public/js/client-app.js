var main = function () {
    $.getJSON("/lots.json", function (response) {
        $("body").append("<p>Number of Lots:  "+response.LOT_ID+"</p>");
    });
    $.getJSON("/products", function (response) {
        $("body").append("<p>Number of Products:  "+response.PRODUCT_NAME+"</p>");
    });
    $.getJSON("/test", function (response) {
        $("body").append("<p>Number of Products:  "+response.PRODUCT_NAME+"</p>");
    });
};

$(document).ready(main);
