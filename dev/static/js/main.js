$(document).ready(function () {
    svg4everybody({});
});

const navigation = $(".nav");
const close = $(".close");
const burger = $(".burger");
const body = $("body");

burger.on("click", function(event) {
    navigation.show();
    body.css("overflow", 'hidden');
});

close.on("click", function(event) {
    navigation.hide();
    body.css("overflow", 'visible');
});

$(window).resize(function() {
    if ($(window).width() > 500) {
        console.log(1);
        navigation.show();
    } else {
        navigation.hide();
    }
})
