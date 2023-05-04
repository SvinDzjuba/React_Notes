$(document).ready(function () {
    $('#reactionBtn').click(function (e) {
        e.preventDefault();
        if ($('#reaction').is(':checked')) {
            $('#reaction').attr('checked', false);
            $('#reactionBtn').children().css('color', '#fff');
            $('#reactionBtn').removeClass('btn-outline-dark');
        } else {
            $('#reaction').attr('checked', true);
            $('#reactionBtn').children().css('color', '#0d6efd');
            $('#reactionBtn').addClass('btn-outline-dark');
        }
    });
});