$(function() {
    $('#submit').click(function(e)  {
        e.preventDefault();
        $.ajax( {
            url: "https://formspree.io/tank302@gmail.com",
            method: "POST",
            data: {email: $('#email').val(),
                    message: $('#message').val()
        },
        dataType: "json"
    }).done(function() {
        $('#contact').html('<h4>Дякую! Я невдовзі Вам відповім!</h4>')
    });
});
});


