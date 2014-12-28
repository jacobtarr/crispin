// -----------------------------
// Javascript
// -----------------------------

// Create clickable tabs for navigation
$(function() {
    $('.site-main .site-main__navigation a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
        $('.site-main ' + currentAttrValue).show().siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});

